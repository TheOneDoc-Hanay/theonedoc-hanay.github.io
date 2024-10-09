<!DOCTYPE html>
<html>
<head>
    <title>HTML</title>
    <style>
        header {
            background-color: rgb(9, 9, 9);
            text-align: center;
            padding: 20px;
            border-radius: 25px;
            background-color: rgba(25, 25, 25, 0.5);
        }
        body {
            background-image: url('https://i.pinimg.com/originals/c0/2b/5e/c02b5e52362d48e695236c7144914228.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;  
            background-size: cover;
        }
        .img1 {
            margin-top: 20px;
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .book {
            background-color: rgb(48, 48, 48);
            color: rgb(255, 255, 255);
            padding: 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            transition-duration: 0.4s;
        }
        .book1 {
            background-color: rgb(48, 48, 48);
            color: rgb(255, 255, 255);
            border-radius: 25px;
            transition: background-color 0.6s ease, transform 0.8s ease, color 0.6s ease;
            width: 560px;
            height: 900px;
            margin-left: auto;
            margin-right: auto;
        }
        .book1:hover {
            background-color: rgb(255, 255, 255);
            color: rgb(0, 0, 0);
            transform: scale(1.05);
        }
        .link {
            background-color: rgb(48, 48, 48);
            color: rgb(255, 255, 255);
            padding: 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            transition-duration: 0.4s;
            }
            .link1 {
            background-color: rgb(48, 48, 48);
            color: rgb(255, 255, 255);
            border-radius: 25px;
            transition: background-color 0.6s ease, transform 0.8s ease, color 0.6s ease;
            }
            .link1:hover {
            background-color: rgb(255, 255, 255);
            color: rgb(0, 0, 0);
            transform: scale(1.05);
        }
        .glow {
            font-size: 38px;
            text-shadow: 0 0 10px rgb(255, 255, 255), 0 0 20px rgb(0, 0, 255);
            color: rgb(255, 255, 255);
            margin: 10px 0;
        }
        .project {
            background-color: rgba(48, 48, 48, 0.4);
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
            border-radius: 20px;
            box-shadow: 0 6px 15px rgb(0, 0, 0);
        }
        .projects {
            padding: 20px;
            text-align: center;
        }
        .name {
            width: 100%;
            max-width: 800px;
            margin: 0 auto 10px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.9);
            font-family: Georgia, serif;
            color: rgb(0, 0, 0);
            text-align: center;
            border-radius: 25px;
        }
        h1 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 38px;
            margin-top: 0px;
            color:rgb(255, 255, 255);
        }
        h2, h3 {
            color: rgb(255, 255, 255);
        }
        p {
            font-family: Arial, Helvetica, sans-serif;
        }
        footer {
        background-color: rgba(25, 25, 25, 0.9);
        color: white;
        text-align: center;
        padding: 30px;
        margin-top: 20px;
        border-radius: 0 0 15px 15px;
        }
        .slideshow {
            max-width: 100%;
            position: relative;
            margin: auto;
        }
        .mySlides {
            display: none;
            margin-left: auto;
            margin-right: auto;
        }
        .mySlides1 {
            display: none;
            margin-left: auto;
            margin-right: auto;
            }
        .mySlides2 {
            display: none;
            margin-left: auto;
            margin-right: auto;
        }
        .prev2, .next2 {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }
        .next2 {
            right: 9px;
            border-radius: 72px 72px;
        }
        .prev2 {
            left: 9px;
            border-radius: 72px 72px;
        }
        .prev2:hover, .next2:hover {
            background-color: rgba(0,0,0,0.8);
        }
        .prev1, .next1 {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }
        .next1 {
            right: 9px;
            border-radius: 72px 72px;
        }
        .prev1 {
            left: 9px;
            border-radius: 72px 72px;
        }
        .prev1:hover, .next1:hover {
            background-color: rgba(0,0,0,0.8);
        }
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }
        .next {
            right: 9px;
            border-radius: 72px 72px;
        }
        .prev {
            left: 9px;
            border-radius: 72px 72px;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0,0,0,0.8);
        }
        .buttonfade {
            animation-name: fade;
            animation-duration: 1.5s;
        }
    </style>
</head>
<body>
    <header>
        <div class="name"> Methosalem B. Indoc 9-B</div>
        <h1 class="glow">ICT Portfolio Compiling Project</h1>
    </header>
    <section class="projects">
        <h3>PROJECTS</h3>
        <div class="project">
            <h1>English Project</h1>
            <div class="slideshow" id="slideshow1">
                <div class="mySlides buttonfade">
                    <img src="https://static01.nyt.com/images/2013/04/26/business/Gatsbyjp/Gatsbyjp-superJumbo.jpg" class="book book1">
                    <a href="https://www.bcscschools.org/cms/lib/IN50000530/Centricity/Domain/642/The%20Great%20Gatsby.pdf" class="link link1" target="_blank">Read The Great Gatsby</a>
                    <h2>This is the project for English. We were required to make a summary of the book, add unknown words and explain their meaning, categorize them (noun, adjective, adverb), and create sentences using them. We also reflect on the story's relevance to our lives.</h2>                        
                </div>
                <div class="mySlides buttonfade">
                    <img src="https://static.docsity.com/documents_first_pages/2020/09/09/9f06c8813fa51cbeeff79b083975211c.png" class="book book1">
                    <a href="https://www.bcscschools.org/cms/lib/IN50000530/Centricity/Domain/642/The%20Great%20Gatsby.pdf" class="link link1" target="_blank">Read The Great Gatsby</a>
                    <h2>A little short summary and the people of the story.</h2>                        
                </div>
                <div class="mySlides buttonfade">
                    <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/462541633_957412139746151_4864829995152899098_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gDduM2snbWoQ7kNvgG-Gba9&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=A-jaJUINH0wgRTC1DHwTLNi&oh=03_Q7cD1QFo3RQCgE4xj_iWQ500KehQ6ZFy787kaZON8Ifa3rlLBA&oe=672D7A82" class="book book1">
                    <a href="https://www.bcscschools.org/cms/lib/IN50000530/Centricity/Domain/642/The%20Great%20Gatsby.pdf" class="link link1" target="_blank">Read The Great Gatsby</a>
                    <h2>My summary of chapter 3 of The Great Gatsby.</h2>
                </div>
                <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
                <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
            </div>
        </div>
        
        <div class="project">
            <h1>English Project</h1>
            <div class="slideshow" id="slideshow2">
                <div class="mySlides1 buttonfade">
                    <img src="https://i.pinimg.com/736x/db/9d/80/db9d80eea99eba395593960d82945e18.jpg" class="book book1">
                    <a href="https://docs.google.com/document/d/1j_lxu2K4QQlmCnhp37hDKU_FI-YigulcfNc1ZHlKS9A/edit?tab=t.0" class="link link1" target="_blank">Basahin Mo Ang Aking Tula</a>
                    <h2>sa paggawa ng tula may limang elemento sa paggawa non at sa pinagawa saamin na ay kahit ano sa buhay mo at dito ay ang mahal ko.</h2>                        
                </div>
                <div class="mySlides1 buttonfade">
                    <img src="https://ph-static.z-dn.net/files/da8/2caa5552bc77b8fb957ecce853678e43.jpg" class="book book1">
                    <a href="https://docs.google.com/document/d/1j_lxu2K4QQlmCnhp37hDKU_FI-YigulcfNc1ZHlKS9A/edit?tab=t.0" class="link link1" target="_blank">Basahin Mo Ang Aking Tula</a>
                    <h2>Example nang tula.</h2>                        
                </div>
                <div class="mySlides1 buttonfade">
                    <img src="https://imgv2-1-f.scribdassets.com/img/document/98648201/original/8848d7da27/1727054219?v=1" class="book book1">
                    <a href="https://docs.google.com/document/d/1j_lxu2K4QQlmCnhp37hDKU_FI-YigulcfNc1ZHlKS9A/edit?tab=t.0" class="link link1" target="_blank">Basahin Mo Ang Aking Tula</a>
                    <h2>Mga elemento sa tula.</h2>
                </div>
                <a class="prev1" onclick="plusSlides(-1, 1)">&#10094;</a>
                <a class="next1" onclick="plusSlides(1, 1)">&#10095;</a>
            </div>
        </div>
        
        <div class="project">
            <h1>Values Project</h1>
            <div class="slideshow" id="slideshow3">
                <div class="mySlides2 buttonfade">
                    <img src="https://nomadplans.com/wp-content/uploads/2018/09/to-tips-to-create-a-habit-2.png" class="book book1">
                    <a href="https://www.thepositivepsychologypeople.com/habits-to-happiness/" class="link link1" target="_blank">What Are Habits?</a>
                    <h2>In having a habits it is needed to be done 21 days straight in order for it to be confirmed to be a habit and in this habits we were required to do that 21 days.</h2>                        
                </div>
                <div class="mySlides2 buttonfade">
                    <img src="https://fixcom-g4bhetdmcgd9b7er.z01.azurefd.net/assets/content/24845/kick-your-worst-habits.png" class="book book1">
                    <a href="https://www.thepositivepsychologypeople.com/habits-to-happiness/" class="link link1" target="_blank">What Are Habits?</a>
                    <h2>Ways to stop a bad habit(s).</h2>                        
                </div>
                <div class="mySlides2 buttonfade">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462642885_1994186051023485_7909711100561630314_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=KTqzu1zlPDoQ7kNvgHWo0Bo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_gid=ArPy8eOk5qYHjYtgELqcFAd&oh=03_Q7cD1QGriZE8bT3tIqFX63bHIX8uWuRZFKt88frmeFx8zTlMog&oe=672E188B" class="book book1">
                    <a href="https://www.thepositivepsychologypeople.com/habits-to-happiness/" class="link link1" target="_blank">What Are Habits?</a>
                    <h2>The Result of a Good Habit.</h2>
                </div>
                <a class="prev1" onclick="plusSlides(-1, 2)">&#10094;</a>
                <a class="next1" onclick="plusSlides(1, 2)">&#10095;</a>
                </div>
            </div>    
    </section>
    <footer>
    <div class="footer-text">
        <p>Contact me: imethosalem@gmail.com | Phone: 639 289 712 014</p>
        <p>Chat with me on social media:</p>
    </div>

    <div class="social-icons">
        <a href="https://www.facebook.com/The.Real.Indoc.Methosalem" target="_blank" title="Facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="30" alt="Facebook" />
        </a>
    </div>

    <div class="footer-copyright">
        <p>&copy; This was the creation of Methosalem B. Indoc. Passed 10/9/2024..</p>
    </div>
</footer>

    <script>
        let slideIndex = [1, 1, 1];
        let slideId = ["slideshow1", "slideshow2", "slideshow3"];
        
        function showSlides(n, no) {
            let i;
            let x = document.getElementsByClassName("mySlides" + (no === 0 ? "" : (no === 1 ? "1" : "2")));
            if (n > x.length) {slideIndex[no] = 1}    
            if (n < 1) {slideIndex[no] = x.length}    
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex[no]-1].style.display = "block";  
        }
        
        function plusSlides(n, no) {
            showSlides(slideIndex[no] += n, no);
        }

        showSlides(slideIndex[0], 0);
        showSlides(slideIndex[1], 1);
        showSlides(slideIndex[2], 2);
    </script>
</body>
</html>
