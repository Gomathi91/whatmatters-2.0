
import fs from "fs";
import path from "path";
import archiver from "archiver";

const PROJECT_NAME = "whatmatters";
const BACKUP_ROOT = "./backups";
const MAX_BACKUPS = 30;

// Generate a timestamp (YYYY-MM-DD-HH-MM-SS)
const TIMESTAMP = new Date()
  .toISOString()
  .replace(/[:T]/g, "-")
  .split(".")[0];
const BACKUP_FILE = `${PROJECT_NAME}_backup_${TIMESTAMP}.zip`;

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_ROOT)) {
  fs.mkdirSync(BACKUP_ROOT, { recursive: true });
  console.log("📁 Created backup folder:", BACKUP_ROOT);
}

const outputPath = path.join(BACKUP_ROOT, BACKUP_FILE);
const output = fs.createWriteStream(outputPath);
const archive = archiver("zip", { zlib: { level: 9 } });

console.log(`📦 Creating backup: ${outputPath}`);

// When the ZIP is done:
output.on("close", () => {
  console.log(`✅ Backup complete: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);

  // Clean up old backups
  const files = fs
    .readdirSync(BACKUP_ROOT)
    .filter((file) => file.endsWith(".zip"))
    .sort(
      (a, b) =>
        fs.statSync(path.join(BACKUP_ROOT, b)).mtimeMs -
        fs.statSync(path.join(BACKUP_ROOT, a)).mtimeMs
    );

  if (files.length > MAX_BACKUPS) {
    const toDelete = files.slice(MAX_BACKUPS);
    console.log(`🧹 Deleting ${toDelete.length} oldest backups...`);
    toDelete.forEach((file) => {
      fs.unlinkSync(path.join(BACKUP_ROOT, file));
      console.log(`   🗑️ Deleted ${file}`);
    });
  }

  console.log("✅ Backup maintenance complete.");
});

archive.on("error", (err) => {
  throw err;
});

// Pipe archive data to the output file
archive.pipe(output);

// Add all project files except these exclusions
archive.glob("**/*", {
  ignore: [
    "node_modules/**",
    ".next/**",
    ".git/**",
    "backups/**",
    ".env*",
    "*.zip",
  ],
});

// Finalize the archive
archive.finalize();
