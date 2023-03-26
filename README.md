## ChatGPT Messenger

ChatGPT Messenger, OpenAI tarafından geliştirilen GPT-3 modeli kullanarak otomatik yanıtlar veren bir chatbot ile etkileşime geçebileceğiniz bir web uygulamasıdır.

## Özellikler

- Kimlik doğrulama: Kullanıcılar güvenli bir şekilde kaydolabilir, oturum açabilir ve oturumu kapatabilir.
- Sohbet: Kullanıcılar doğal dil kullanarak diğer kullanıcılarla sohbet edebilirler. Uygulama, insan benzeri yanıtlar oluşturmak için OpenAI'nin GPT-3'ünü kullanır.

## Kullanılan Teknolojiler

ChatGPT Messenger, aşağıdaki teknolojileri kullanır:

- Next.js - React tabanlı bir web uygulama çatısı
- NextAuth.js - Node.js tabanlı web uygulamalrı için kullanılabilen bir kimlik doğrulama çerçevesidir
- OpenAI API - Otomatik yanıt veren chatbot için kullanılan yapay zeka platformu
- Firebase Authentication - Kullanıcı kimlik doğrulama ve yönetimi için kullanılan bir araç
- Tailwind CSS - Önceden oluşturulmuş CSS stilleri ve komutları içeren bir CSS çerçevesi

## Canlı

[Vercel](https://chatgpt-messenger-iota.vercel.app/)

## Nasıl Kullanılır?

ChatGPT Messenger'ı kullanmak için aşağıdaki adımları izleyebilirsiniz:

```bash
git clone https://github.com/FurkanTanriover/chatgpt-messenger.git
```

```bash
cd chatgpt-messenger
npm install
```

```bash
export NEXT_PUBLIC_OPENAI_API_KEY=<your_openai_api_key>
```

```bash
npm run dev
```
