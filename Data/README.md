This directory is used for placing posts and content
-

create a file here called `posts.json` the file should look like this (example):
```
{
    "posts": [
        {
            "Album": "Age Of",
            "Body": "Data/Text/Age Of.txt",
            "Image": "Data/Images/Age Of.jpg"
        },
        {
            "Album": "Transistor",
            "Body": "Data/Text/Transistor.txt",
            "Image": "Data/Images/Transistor.jpg"
        }
    ]
}
```
with each post being as shown
```
{
    "Album": "Name",
    "Body": "path/to/review.txt",
    "Image": "path/to/image.png"
}
```
The recommended file structure for this folder is
```
src
├── Data
│   ├── Images
│       ├── image.png
│   ├── Posts
│       ├── post.txt
│   └── posts.json
├── Scripts
├── Styles
└── index.html
```