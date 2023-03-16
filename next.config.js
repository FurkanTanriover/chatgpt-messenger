/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_ID: "1031458472729-6ff6vpo4g15083qkfdra10hd2su47cq9.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    NEXTAUTH_URL: "http:localhost:3000",
    NEXTAUTH_SECRET: "123456fA",
    //project-id.firebaseio.com

    FIREBASE_API_KEY: "AIzaSyCOs7GBGmpclzy-4juL_8SYhWXE4D0sEl4",
    FIREBASE_AUTH_DOMAIN: "chatgpt-messenger-41275.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://project-id.firebaseio.com",
    FIREBASE_PROJECT_ID: "chatgpt-messenger-41275",
    FIREBASE_STORAGE_BUCKET: "chatgpt-messenger-41275.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "1031458472729",
    FIREBASE_APP_ID: "1:1031458472729:web:79e104eb0e81171338bb88",
  },
};
