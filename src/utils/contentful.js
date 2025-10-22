import { createClient } from 'contentful';

// Published Content
export const deliveryclient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
 
// Unpublished Content

export const previewclient = createClient({
  space : process.env.CONTENTFUL_SPACE_ID,
  accessToken : process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com", 

})


