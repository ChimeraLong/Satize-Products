/* ============================================================
   POSTS.JS — This is the ONLY file you need to edit.
   No coding knowledge needed. Just follow the pattern below.
   ============================================================

   HOW TO ADD A NEW POST:
   1. Copy one whole block from { to }, including the comma after it.
   2. Paste it into the list below.
   3. Change the text inside the quotes " " to your own.
   4. Save the file. That's it — your site updates automatically.

   FIELD GUIDE:
   - videoSrc     → the video file. Put your video files in the
                    "videos" folder and write: "videos/yourfile.mp4"
                    (You can also use a direct link to a video file
                    that ends in .mp4)
   - title        → the big title shown on the post
   - description  → the text shown under the title
   - ctaText      → the words on your purchase / call-to-action button
   - ctaLink      → where the button takes people when tapped
                    (a product page, a shop link, an Instagram, etc.)

   TIP: Keep title short (under 6 words) and description under
   2-3 sentences so it fits nicely on phone screens.
   ============================================================ */

const SITE_TITLE = "Your Blog Name";
// ☝️ Change this to your blog's name. It shows at the top of the site.

const POSTS = [
  {
    videoSrc: "videos/sample1.mp4",
    title: "Welcome to my page",
    description: "This is your first post. Replace this video and text with your own by editing posts.js.",
    ctaText: "Shop Now",
    ctaLink: "https://example.com"
  },
  {
    videoSrc: "videos/sample2.mp4",
    title: "Behind the scenes",
    description: "Add as many posts as you like — just copy this block and paste it below the last one.",
    ctaText: "Learn More",
    ctaLink: "https://example.com"
  },
  {
    videoSrc: "videos/sample3.mp4",
    title: "New drop is here",
    description: "Every post is its own full-screen video, just like TikTok.",
    ctaText: "Buy Now",
    ctaLink: "https://example.com"
  }
];

/* Do not edit anything below this line. */
