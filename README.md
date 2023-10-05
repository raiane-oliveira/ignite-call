<h1 align="center">
  <a  href="https://raianeignitecall.vercel.app/">
   <div>
      <img src="https://repository-images.githubusercontent.com/657801497/d93c47a5-3cae-43ed-8a89-6851b9038ad6" alt="Ignite logo" width="90" height="50" />
    </div>
    Ignite Shop
  </a>
</h1>

<p align="center">
  <img src="https://badgen.net/npm/v/next" />
  <img src="https://badgen.net/github/contributors/raiane-oliveira/ignite-call" />
</p>

<h4 align="center"> 
	✔️  Ignite Call - Completed  ✔️
</h4>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#-features">Features</a> •
 <a href="#-tech-stack">Tech Stack</a> • 
 <a href="#-learnings">Learnings</a> •
 <a href="#-feedbacks">Feedbacks</a>
</p>

## 💻 About

A full-stack Calendly-like application that connects to your Google Account and schedules events and Google Meet calls for you.  
Allows users to create an account and connect to their Google Calendar via OAuth authentication and set their time availability.
The interface was developed using its <a href="https://github.com/raiane-oliveira/design-system">design system</a> which has all used components, tokens, spacing, etc.

<img src="https://github.com/raiane-oliveira/ignite-call/assets/100815627/a5e54abd-15b2-46ad-b250-589f067cb375" />

The database was deployed in <a href="https://planetscale.com">Planetscale</a> and the application on <a href="https://vercel.com">Vercel</a>.
This challenge was offered in Rocketseat's Ignite course.

## 🪸 Features

- [x] Create a user account.
- [x] Connect to Google account, authorizing name, email, and Google calendar scope to the application.
- [x] List and save times availability of user into the database.
- [x] Disable calendar day if there's no availability.
- [x] Schedule a Google Meet call. 

## 📒 Learnings

- OAuth authentication and authorization
- Connect and run MySQL docker container into Prisma ORM
- Calculate dates and save them in a good way in the database.
- Deploy MySQL database and manage Google console to get OAuth screen permissions.
- Learn about access tokens and refresh tokens.
- Deal with cookies for temporary login user.

## 🛠 Tech Stack

- NextJS
  - next-auth
  - dayjs
  - next-seo
  - nookies
- Prisma ORM
- MySQL
- Docker
- TypeScript
- Stitches

## 🤝 Feedbacks

If you have opinions on how I can improve this application, please send me a message on <a href="https://www.linkedin.com/in/raiane-oliveira-dev">Linkedin</a> or an <a href="mailto:raiane.oliveira404@gmail.com">email</a>.
I will be happy to answer and learn more from you! ;)
