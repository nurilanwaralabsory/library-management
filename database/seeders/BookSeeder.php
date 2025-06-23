<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'CSS in Depth',
                'author' => 'Keith J. Grant',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png',
                'cover_color' => '#1e2a4b',
                'description' => 'CSS in Depth by Keith J. Grant is a comprehensive guide for web developers who want to go beyond the basics of CSS and master the intricacies of styling web pages. The book is designed for intermediate to advanced developers who are already familiar with CSS but want to deepen their understanding and leverage its full potential.',
                'total_copies' => 18,
                'available_copies' => 16,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_O-O0Z_Vz5.png',
                'summary' => 'CSS in Depth starts by reviewing the basic principles of CSS, then quickly moves on to more advanced concepts. Grant emphasizes the importance of understanding the underlying mechanics of CSS properties like layout, box model, and positioning. Readers learn how to use these tools more effectively, making their code more predictable and easier to debug.'
            ],
            [
                'title' => 'HTML and CSS: Design and Build Websites',
                'author' => 'Jon Duckett',
                'genre' => 'Web Development',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_1pCoBDI11.png',
                'cover_color' => '#3a2931',
                'description' => 'Whether you’re a complete beginner or someone looking to brush up on HTML and CSS, this book provides a solid foundation and practical skills that can be applied immediately to real-world projects.',
                'total_copies' => 45,
                'available_copies' => 45,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_MONyhmpr4V.png',
                'summary' => 'HTML and CSS: Design and Build Websites starts with an introduction to HTML, covering the basic building blocks of a webpage, including elements like headings, paragraphs, links, and images. Duckett carefully explains the structure and syntax of HTML, teaching readers how to write and organize their code.'
            ],
            [
                'title' => 'System Design Interview',
                'author' => 'Alex Xu',
                'genre' => 'System Design',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_CmVaNeXrQ.png',
                'cover_color' => '#363b63',
                'description' => 'System Design Interview: An Insider\'s Guide by Alex Xu is a must-read for software engineers and professionals preparing for system design interviews. The book provides a detailed overview of the principles and techniques needed to excel in system design interviews, which are often a key part of the hiring process at top tech companies.',
                'total_copies' => 10,
                'available_copies' => 10,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_x_vGP6M7Y.png',
                'summary' => 'System Design Interview: An Insider\'s Guide begins by introducing the key concepts of system design, emphasizing the importance of understanding requirements, scalability, and reliability. Xu explains how to approach an open-ended problem by breaking it down into smaller, manageable components, ensuring a structured response.'
            ],
            [
                'title' => 'Computer Science Distilled',
                'author' => 'Wladston Ferreira Filho',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_ZRyGl0A75A.png',
                'cover_color' => '#73d173',
                'description' => 'Computer Science Distilled by Wladston Ferreira Filho is a concise and approachable introduction to the core concepts of computer science. Designed for beginners and those looking to strengthen their problem-solving skills, the book breaks down complex topics into digestible, easy-to-understand pieces.',
                'total_copies' => 89,
                'available_copies' => 87,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_W6XGeHaEO.png',
                'summary' => 'Computer Science Distilled begins by explaining the art of problem-solving in computing, emphasizing the importance of breaking down problems into manageable parts. It introduces key computational concepts such as abstraction, algorithms, and complexity analysis, providing a strong foundation for tackling any programming challenge.'
            ],
            [
                'title' => 'The Art of Assembly Language',
                'author' => 'Randall Hyde',
                'genre' => 'Programming',
                'rating' => 3,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_lZrAopUNM.png',
                'cover_color' => '#fff9bf',
                'description' => 'The Art of Assembly Language by Randall Hyde is a comprehensive and engaging introduction to assembly language programming. Known for its clarity and depth, the book provides readers with a solid foundation in low-level programming concepts, which are essential for understanding how computers operate at their core.',
                'total_copies' => 78,
                'available_copies' => 78,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_VGtFawJik.png',
                'summary' => 'The Art of Assembly Language introduces readers to the fundamentals of assembly programming, beginning with an overview of computer architecture. It explains how CPUs process instructions and manage data, providing the necessary background to appreciate the power of assembly language.'
            ],
            [
                'title' => 'Seriously Good Software',
                'author' => 'Marco Faella',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_YiFXdp5P_T.png',
                'cover_color' => '#061e20',
                'description' => 'This book is perfect for developers who want to elevate their coding skills beyond functionality, making their work robust and professional. Written in an accessible style, Seriously Good Software bridges the gap between theoretical principles and practical application.',
                'total_copies' => 45,
                'available_copies' => 45,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_LhwRi_a9cJ.png',
                'summary' => 'Seriously Good Software starts by exploring the core principles of software development, emphasizing the importance of correctness—software must function as intended under all specified conditions. Faella uses clear examples to show how to identify and fix errors that might compromise the correctness of code.'
            ],
            [
                'title' => 'Fundamentals of Database Systems',
                'author' => 'Ramez Elmasri and Shamkant B. Navathe',
                'genre' => 'Computer Science',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_9-sl0Jo8y.png',
                'cover_color' => '#ffffff',
                'description' => 'Fundamentals of Database Systems by Ramez Elmasri and Shamkant B. Navathe is a comprehensive textbook that serves as a cornerstone for understanding database systems and their applications. This book is widely used in academia and the industry to teach and learn foundational and advanced database concepts.',
                'total_copies' => 145,
                'available_copies' => 145,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_UZULgWXVA.png',
                'summary' => 'Fundamentals of Database Systems begins by introducing the fundamental concepts of database systems, including their purpose, architecture, and role in modern computing. It explains key data modeling techniques, such as the Entity-Relationship (ER) model, which is used to design and visualize database schemas.'
            ],
            [
                'title' => 'Operating System Concepts',
                'author' => 'Abraham Silberschatz, Peter B. Galvin, and Greg Gagne',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_W6Bz0KiBC.png',
                'cover_color' => '#0e0e10',
                'description' => 'Operating System Concepts, often referred to as the "Dinosaur Book," is a definitive guide to understanding the inner workings of operating systems. Written by Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, this book is an essential resource for students, educators, and professionals in the field of computer science.',
                'total_copies' => 97,
                'available_copies' => 97,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_rkMFYr5J0.png',
                'summary' => 'Operating System Concepts provides an in-depth exploration of operating systems, starting with an introduction to their fundamental role in computing. It describes how operating systems manage hardware resources, such as the CPU, memory, and storage, to ensure efficient and reliable operation.'
            ],
            [
                'title' => 'Algorithms',
                'author' => 'Robert Sedgewick and Kevin Wayne',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_dr-f_LPwA.png',
                'cover_color' => '#bf1e2e',
                'description' => 'Algorithms by Robert Sedgewick and Kevin Wayne is a comprehensive and authoritative guide to understanding algorithms and their role in modern computing. Widely regarded as a foundational text in computer science, the book covers a vast array of algorithms, ranging from sorting and searching to graph processing and string manipulation.',
                'total_copies' => 321,
                'available_copies' => 318,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_KSZGUHg5R.png',
                'summary' => 'Algorithms is a thorough exploration of algorithmic principles and their applications. It begins with the basics, introducing elementary algorithms like sorting and searching. These foundational topics are covered in-depth, explaining their importance in handling data efficiently and effectively.'
            ],
            [
                'title' => 'The Clean Coder',
                'author' => 'Robert C. Martin',
                'genre' => 'Software',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_EE5klEyX0.png',
                'cover_color' => '#060709',
                'description' => 'The Clean Coder by Robert C. Martin is an essential guide for software developers who aspire to reach the highest standards of professionalism. Written by one of the most respected figures in the software engineering community, this book transcends technical skills, focusing on the mindset, ethics, and practices that define a professional programmer.',
                'total_copies' => 35,
                'available_copies' => 35,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_50K9AmWND.png',
                'summary' => 'The Clean Coder delves into the principles and practices of professional software development. The book begins by defining what it means to be a professional programmer, emphasizing the importance of taking responsibility for your work and acting with integrity.'
            ],
            [
                'title' => 'The Lean Startup',
                'author' => 'Eric Ries',
                'genre' => 'Software',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_XyoNwHCdwe.png',
                'cover_color' => '#1E73BE',
                'description' => 'The Lean Startup by Eric Ries is a guide to building and managing startups in a way that maximizes innovation while minimizing wasted effort. The book introduces the concept of the “Lean Startup” methodology, which focuses on quickly turning ideas into products, testing them with real customers, and learning from their feedback to refine and improve.',
                'total_copies' => 17,
                'available_copies' => 17,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_uiRdVQTTm.png',
                'summary' => 'The Lean Startup by Eric Ries is a guide to building and managing startups in a way that maximizes innovation while minimizing wasted effort. This approach helps entrepreneurs create successful businesses by avoiding long periods of untested development.'
            ],
            [
                'title' => 'Atomic Habits',
                'author' => 'James Clear',
                'genre' => 'Self Help',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_HOCexO5Ms.png',
                'cover_color' => '#ffffff',
                'description' => 'Atomic Habits by James Clear is a book about how small changes in daily habits can lead to significant transformations over time. Clear emphasizes that habits are the compound interest of self-improvement—tiny actions repeated consistently will eventually produce remarkable results.',
                'total_copies' => 1200,
                'available_copies' => 1200,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_WyfBbHfTp.png',
                'summary' => 'Atomic Habits by James Clear is a book about how small changes in daily habits can lead to significant transformations over time. Clear emphasizes that habits are the compound interest of self-improvement.'
            ],
            [
                'title' => 'React in Action',
                'author' => 'Mark Tielens Thomas',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_rzjr6TrKF.png',
                'cover_color' => '#302428',
                'description' => 'React in Action by Mark Tielens Thomas is a practical guide to mastering React, a popular JavaScript library for building user interfaces. The book is ideal for developers looking to learn React from the ground up and for those seeking to deepen their understanding of its ecosystem.',
                'total_copies' => 57,
                'available_copies' => 57,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_jO3MUj8-s.png',
                'summary' => 'React in Action by Mark Tielens Thomas is a practical guide to mastering React. The book starts by introducing the fundamentals of React, including components, JSX, props, and state management, and then explores more advanced topics.'
            ],
            [
                'title' => 'JavaScript: The Good Parts',
                'author' => 'Douglas Crockford',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_-xOn0_b32.png',
                'cover_color' => '#00a199',
                'description' => 'JavaScript: The Good Parts by Douglas Crockford is a concise guide to understanding and using the best features of JavaScript while avoiding its pitfalls. This book is designed for developers who want to write clean, efficient, and reliable JavaScript code.',
                'total_copies' => 501,
                'available_copies' => 500,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_KOYG_-R2J.png',
                'summary' => 'JavaScript: The Good Parts by Douglas Crockford is a concise guide to understanding and using the best features of JavaScript while avoiding its pitfalls. Crockford identifies "the good parts" of JavaScript, such as its dynamic object-oriented nature and functional programming capabilities.'
            ],
            [
                'title' => 'Eloquent Javascript',
                'author' => 'Marijn Haverbeke',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_acYPV3jV0.png',
                'cover_color' => '#F8D347',
                'description' => 'Eloquent JavaScript by Marijn Haverbeke is a deep dive into JavaScript, designed for developers who want to master the language. The book combines clear explanations, practical examples, and exercises to help readers understand both the basics and advanced features of JavaScript.',
                'total_copies' => 121,
                'available_copies' => 120,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_l0umqa2H6.png',
                'summary' => 'Eloquent JavaScript by Marijn Haverbeke is a deep dive into JavaScript. The book begins with an introduction to programming concepts and quickly transitions into JavaScript fundamentals, including variables, functions, and control structures.'
            ],
            [
                'title' => 'Fullstack React: The Complete Guide to ReactJS and Friends',
                'author' => 'Accomazzo, Greif, and Murray',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_aiko1JtEn.png',
                'cover_color' => '#eac8bf',
                'description' => 'Fullstack React: The Complete Guide to ReactJS and Friends by Accomazzo, Greif, and Murray is a comprehensive resource for developers who want to master React and build full-stack applications.',
                'total_copies' => 11,
                'available_copies' => 11,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_0HxM1wQe62.png',
                'summary' => 'Fullstack React is a comprehensive resource for developers who want to master React. The book provides step-by-step tutorials, hands-on projects, and deep insights into React\'s ecosystem, making it an excellent guide for both beginners and experienced developers.'
            ],
            [
                'title' => 'Cracking the Coding Interview',
                'author' => 'Gayle Laakmann McDowell',
                'genre' => 'Programming',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_yryJFVYWd.png',
                'cover_color' => '#97cc02',
                'description' => 'Cracking the Coding Interview by Gayle Laakmann McDowell is a comprehensive guide for software engineers preparing for technical interviews. The book is packed with insights, strategies, and over 180 programming questions that simulate real interview scenarios.',
                'total_copies' => 32,
                'available_copies' => 32,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_vcXsdjkqw.png',
                'summary' => 'Cracking the Coding Interview by Gayle Laakmann McDowell is a comprehensive guide for software engineers preparing for technical interviews. It provides not just solutions but also detailed explanations to help readers understand the reasoning and improve their problem-solving skills.'
            ],
        ];

        DB::table('books')->insert($books);
    }
}
