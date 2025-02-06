---
title: "My 2024 and 2025 roadmap"
description: ""
pubDate: "Feb 06 2025"
category: "Life"
---
# Introduction

Hi! I am writing this post on **January 4th, 2025**, which means I was too lazy to write it before the year ended—but no matter, let's get to it now.

# 2024 - A Year of Rust

Last year was pretty good for me—I think it was the most productive I've ever been. Naturally, I started tons of projects, most of which I still haven't finished ;) but I did manage to make some of them work.

In January, I began moving away from React for my portfolio [website](https://gabrielkaszewski.dev/) for one simple reason: I don't think static websites like mine need a UI JavaScript library. When I first created the website, I was learning web development and wanted to showcase my skills to get a job, and React seemed like a good opportunity to do that.

My website consisted of two 'modules':

1. REST API + Admin dashboard - written in Django
2. Next.js frontend - used for meta tags and better SEO

I really didn't like that approach. It made more sense to just use Django and render static HTML... so that's what I did!

But that wasn't all I did in the first month of 2024. I had this crazy idea to create a simple video editor (you know, one that would allow users to put multiple clips on a timeline, cut fragments, and adjust the audio for each clip) using _FFmpeg_ and Rust. I didn’t finish it—not even close—but if my memory isn't playing tricks on me, I think I did manage to make a CLI version that combined multiple clips together.

Next, I wrote a **Minesweeper** game in C++ using Raylib. That was pretty fun! The code, however, isn't really good—it's not idiomatic C++, more like C with classes—but the point of the project was just to have fun. That’s why I’m not going to link the repo. However, if someone is interested, they can easily find it on my GitHub.

## February - Small but Fun Projects

February, the shortest month of the year! I hopped from project to project, but some were actually finished and published.

First, a very small one—**Flappy Bird in the console**. Yes, I recreated Flappy Bird using Rust and the _console_engine_ crate. That was a pleasant experience, and in the future, I’d love to create more interactive console-based applications.

Next, I wrote **two Discord bots**, also in Rust. One was a simple reminder bot where you type `!remindme "a thing" WHEN` (for example, `30m` for 30 minutes). The other was a **vxtiktok bot**, which converted TikTok URLs to vxtiktok URLs so they would embed properly in Discord. Very simple, quick projects! To my surprise, using Rust wasn't a pain at all.

You might ask, _Why use Rust for that instead of JavaScript?_ Great question! The answer is simple—my VPS only has **2 GiB of RAM**, which isn't much. My tech stack for web services was mostly Python-based (Python uses a lot of memory, just like Node.js). Rust, on the other hand, uses much less memory, and that was a major reason for choosing it. Plus, Rust is actually pretty nice to write in—it's very ergonomic. I love it.

Next, I started working on a **Missile Commander clone**—a recreation of the old Atari game **Missile Command**. I actually managed to replicate the core gameplay, but since I’m terrible at designing games and coming up with new mechanics, levels, and features, I abandoned it pretty quickly. I even wrote a **level editor** for it! The game and editor were both written in Rust using **macroquad**, as I wanted to export it to the web. Unfortunately, I ran into some errors when trying to export and gave up.
## March - A Sokoban Game in Java

In March, I only worked on one toy project—a **Sokoban game in Java** using Raylib. Why Java? No idea. I guess I just wanted to refresh my skills in the language.

## April - The RTS Struggle

In April, I really wanted to create an **RTS game**. Unfortunately, I didn’t succeed. Nevertheless, I made an attempt at creating an **RTS engine in Rust** using the _comfy_ crate. Later, I tried moving to Bevy, but pathfinding defeated me. I haven't given up on the idea completely, though—I may go back to it in the future, because I love RTS and strategy games so much.

While researching RTS mechanics, I wrote my own **quadtree** in Rust and visualized it using Raylib. That was pretty fun and easy.![[2024-04-09_21-31-31.mp4]]

I also got into **ray tracing** and, thanks to _Ray Tracing in One Weekend_, I wrote my own **software ray tracer** in Rust.

Another Rust project from April was an **Otodom scraper** with a frontend in React. Otodom is a website listing real estate for sale or rent, and since I was house-hunting, I needed a better way to filter available listings. So I wrote a simple service using _Axum_ that scrapes the data every ten minutes, allowing me to easily filter through listings.

Last but not least, I created **better_notepad**, a Notepad-like app because I was annoyed that the default Windows Notepad didn’t close tabs when the app was closed. I wrote mine in C++ with wxWidgets. Later, I learned that you can actually turn that behavior off in the Notepad settings... oops.

## May - A Nostalgic Social Network

In May, I started a **2D platformer in Unity**, inspired by **Brave Dwarves 2** (a childhood favorite). I focused on **composition over inheritance**, and I loved that approach—so much that I still use it in all future projects. Unfortunately, I abandoned the game.

I also built a **tiny social network** inspired by the late 2000s and early 2010s, when social media was more about you and your friends rather than memes, ads, and algorithm-driven feeds. My idea was simple: users could publish short thoughts (up to 128 characters), follow friends, and see only their friends' posts in the feed. I used Django, but I plan to rewrite it in Rust for lower memory usage. I might even make it **decentralized using ActivityPub**, because I recently fell in love with that concept.


I also built my own **r/place clone** in Rust, using WebSockets via _socket.io_ and plain JavaScript for the client. It worked pretty well! However, I ran into an issue where I was sending data inefficiently, which caused massive memory usage—something like **~100MB per user connection**. I don’t remember if I ever fixed it, but debugging network-related stuff is still a bit of a mystery to me.



## June - A Grand Strategy Game Attempt

In June, I made another attempt at an **RTS/Strategy game**, this time a **turn-based grand strategy game** similar to _Civilization_. I used **Bevy** and the **hexx crate**, but as you can imagine, I didn’t get very far—I got stuck on the turn system :p

Next, I set out to create a **news desktop app** that would aggregate **RSS news feeds** from various sources, including _The Guardian_ and _BBC_, while allowing users to add their own custom feeds. My goal was to integrate it with **local LLMs** or **OpenAI services** via an API key to generate concise article summaries. For the backend, I naturally chose **Rust**, while the frontend was built using **React** with **Tauri** handling the desktop functionality. Unfortunately, I didn’t manage to complete the project :( but I still hope to revisit it someday.
## August - Boomer shooter endeavor
In **August**, I experimented with **Godot** and started developing a **boomer shooter**!


This was yet another project I left unfinished. While I enjoy working with **Godot**, I found its 3D tools a bit too clunky for my workflow.
## September - My Own Podcast Platform

In September, I built my own **podcast platform**! I wrote the backend in **Loco.rs** and the frontend in **Svelte**. I was really happy with how it turned out, but after recording just **one episode**, I lost interest. Shame.

In the meantime, I created a **mod for VTOL VR**, which currently has **623 subscribers**! One day, I would love to create my own **VR game**, but for now, I have **zero ideas** for what it could be :<
## December - Back to Game Development

In December, I tried **Advent of Code**, but I gave up after **three days** :p. Instead, I started working again on my **2D platformer game, Mr. Brick Adventures**. This time, I _vow_ to finish it and release it on **Steam**! I’m using **Godot** again, and I have to admit—it’s quite nice for 2D development. I wanted to use Rust, but it was a bit too tedious, so I stuck with GDScript.

---

# 2025 Roadmap

For **2025**, my main goal is to release my first game, **Mr. Brick Adventures**.

I also started my first **embedded project**—a simple **LED screen** that displays various data (my stock portfolio, weather, Spotify track info, etc.). So far, I have my **custom protocol** ready and a **server that sends data to the ESP32**. Now, I just need to write the ESP32 firmware.

As I mentioned before, I want to return to my **social network project**—but this time, I’ll make it **decentralized with ActivityPub**. And of course, I _have_ to return to my **RTS/Strategy game dream**. Will I succeed? Probably not. But we'll see.

For now, that’s it. See you in the next post!