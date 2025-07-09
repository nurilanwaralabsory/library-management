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
                'id' => '9084986f-456c-449b-ae6e-59ef1f26b129',
                'title' => 'CSS in Depth',
                'author' => 'Keith J. Grant',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png',
                'cover_color' => '#1e2a4b',
                'description' => 'CSS in Depth oleh Keith J. Grant adalah panduan komprehensif bagi para pengembang web yang ingin melampaui dasar-dasar CSS dan menguasai seluk-beluk penataan halaman web. Buku ini dirancang untuk pengembang tingkat menengah hingga mahir yang sudah akrab dengan CSS tetapi ingin memperdalam pemahaman mereka dan memanfaatkan potensi penuhnya.',
                'total_copies' => 18,
                'available_copies' => 16,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_O-O0Z_Vz5.png',
                'summary' => 'CSS in Depth dimulai dengan meninjau prinsip-prinsip dasar CSS, lalu dengan cepat beralih ke konsep yang lebih canggih. Grant menekankan pentingnya memahami mekanisme yang mendasari properti CSS seperti layout, box model, dan positioning. Pembaca belajar cara menggunakan alat-alat ini dengan lebih efektif, membuat kode mereka lebih dapat diprediksi dan lebih mudah di-debug.'
            ],
            [
                'id' => '350c3bc8-a5cc-45a3-ba16-97b93ed056b0',
                'title' => 'HTML and CSS: Design and Build Websites',
                'author' => 'Jon Duckett',
                'genre' => 'Web Development',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_1pCoBDI11.png',
                'cover_color' => '#3a2931',
                'description' => 'Baik Anda seorang pemula maupun seseorang yang ingin menyegarkan kembali pengetahuan tentang HTML dan CSS, buku ini menyediakan fondasi yang kokoh dan keterampilan praktis yang dapat segera diterapkan pada proyek-proyek dunia nyata.',
                'total_copies' => 45,
                'available_copies' => 45,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_MONyhmpr4V.png',
                'summary' => 'HTML and CSS: Design and Build Websites dimulai dengan pengenalan HTML, mencakup blok bangunan dasar halaman web, termasuk elemen seperti heading, paragraf, tautan, dan gambar. Duckett dengan cermat menjelaskan struktur dan sintaks HTML, mengajari pembaca cara menulis dan mengatur kode mereka.'
            ],
            [
                'id' => 'b514f922-a715-45ec-846e-e51d40e15aa2',
                'title' => 'System Design Interview',
                'author' => 'Alex Xu',
                'genre' => 'System Design',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_CmVaNeXrQ.png',
                'cover_color' => '#363b63',
                'description' => 'System Design Interview: An Insider\'s Guide oleh Alex Xu adalah buku yang wajib dibaca oleh para insinyur perangkat lunak dan profesional yang sedang mempersiapkan wawancara desain sistem. Buku ini memberikan gambaran rinci tentang prinsip dan teknik yang dibutuhkan untuk unggul dalam wawancara desain sistem, yang seringkali menjadi bagian penting dari proses perekrutan di perusahaan teknologi terkemuka.',
                'total_copies' => 10,
                'available_copies' => 10,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_x_vGP6M7Y.png',
                'summary' => 'System Design Interview: An Insider\'s Guide dimulai dengan memperkenalkan konsep-konsep kunci dari desain sistem, menekankan pentingnya memahami persyaratan, skalabilitas, dan keandalan. Xu menjelaskan cara mendekati masalah yang bersifat terbuka dengan memecahnya menjadi komponen-komponen yang lebih kecil dan dapat dikelola, untuk memastikan respons yang terstruktur.'
            ],
            [
                'id' => 'b4ed06bf-02b2-42c4-8886-b3847af02cca',
                'title' => 'Computer Science Distilled',
                'author' => 'Wladston Ferreira Filho',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_ZRyGl0A75A.png',
                'cover_color' => '#73d173',
                'description' => 'Computer Science Distilled oleh Wladston Ferreira Filho adalah pengantar yang ringkas dan mudah diakses mengenai konsep-konsep inti ilmu komputer. Dirancang untuk pemula dan mereka yang ingin memperkuat keterampilan pemecahan masalah, buku ini memecah topik-topik kompleks menjadi bagian-bagian yang mudah dicerna dan dipahami.',
                'total_copies' => 89,
                'available_copies' => 87,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_W6XGeHaEO.png',
                'summary' => 'Computer Science Distilled dimulai dengan menjelaskan seni pemecahan masalah dalam komputasi, menekankan pentingnya memecah masalah menjadi bagian-bagian yang dapat dikelola. Buku ini memperkenalkan konsep-konsep komputasi utama seperti abstraksi, algoritma, dan analisis kompleksitas, memberikan fondasi yang kuat untuk mengatasi tantangan pemrograman apa pun.'
            ],
            [
                'id' => 'dc73abc1-8699-4e0a-91b0-a67e80292b9c',
                'title' => 'The Art of Assembly Language',
                'author' => 'Randall Hyde',
                'genre' => 'Programming',
                'rating' => 3,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_lZrAopUNM.png',
                'cover_color' => '#fff9bf',
                'description' => 'The Art of Assembly Language oleh Randall Hyde adalah pengantar yang komprehensif dan menarik untuk pemrograman bahasa assembly. Dikenal karena kejelasan dan kedalamannya, buku ini memberikan pembaca fondasi yang kokoh dalam konsep pemrograman tingkat rendah, yang penting untuk memahami bagaimana komputer beroperasi pada intinya.',
                'total_copies' => 78,
                'available_copies' => 78,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_VGtFawJik.png',
                'summary' => 'The Art of Assembly Language memperkenalkan pembaca pada dasar-dasar pemrograman assembly, dimulai dengan gambaran umum arsitektur komputer. Buku ini menjelaskan bagaimana CPU memproses instruksi dan mengelola data, memberikan latar belakang yang diperlukan untuk menghargai kekuatan bahasa assembly.'
            ],
            [
                'id' => '8f45a8ad-e0e1-437e-8987-5bcbaca24bd9',
                'title' => 'Seriously Good Software',
                'author' => 'Marco Faella',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_YiFXdp5P_T.png',
                'cover_color' => '#061e20',
                'description' => 'Buku ini sangat cocok untuk para pengembang yang ingin meningkatkan keterampilan pengkodean mereka melampaui fungsionalitas, membuat pekerjaan mereka menjadi kuat dan profesional. Ditulis dengan gaya yang mudah diakses, Seriously Good Software menjembatani kesenjangan antara prinsip-prinsip teoretis dan penerapan praktis.',
                'total_copies' => 45,
                'available_copies' => 45,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_LhwRi_a9cJ.png',
                'summary' => 'Seriously Good Software dimulai dengan menjelajahi prinsip-prinsip inti pengembangan perangkat lunak, menekankan pentingnya kebenaran—perangkat lunak harus berfungsi sebagaimana mestinya di bawah semua kondisi yang ditentukan. Faella menggunakan contoh-contoh yang jelas untuk menunjukkan cara mengidentifikasi dan memperbaiki kesalahan yang dapat mengkompromikan kebenaran kode.'
            ],
            [
                'id' => '91445e57-01a8-4e1e-bb18-cf04b3a0b7d1',
                'title' => 'Fundamentals of Database Systems',
                'author' => 'Ramez Elmasri and Shamkant B. Navathe',
                'genre' => 'Computer Science',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_9-sl0Jo8y.png',
                'cover_color' => '#ffffff',
                'description' => 'Fundamentals of Database Systems oleh Ramez Elmasri dan Shamkant B. Navathe adalah buku teks komprehensif yang menjadi landasan untuk memahami sistem basis data dan aplikasinya. Buku ini banyak digunakan di dunia akademis dan industri untuk mengajar dan mempelajari konsep-konsep basis data dasar dan lanjutan.',
                'total_copies' => 145,
                'available_copies' => 145,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_UZULgWXVA.png',
                'summary' => 'Fundamentals of Database Systems dimulai dengan memperkenalkan konsep-konsep dasar sistem basis data, termasuk tujuan, arsitektur, dan perannya dalam komputasi modern. Buku ini menjelaskan teknik-teknik pemodelan data utama, seperti model Entity-Relationship (ER), yang digunakan untuk merancang dan memvisualisasikan skema basis data.'
            ],
            [
                'id' => 'c3f2ff59-a3c2-47d2-a793-93457a9dccf7',
                'title' => 'Operating System Concepts',
                'author' => 'Abraham Silberschatz, Peter B. Galvin, and Greg Gagne',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_W6Bz0KiBC.png',
                'cover_color' => '#0e0e10',
                'description' => 'Operating System Concepts, sering disebut sebagai "Buku Dinosaurus," adalah panduan definitif untuk memahami cara kerja sistem operasi. Ditulis oleh Abraham Silberschatz, Peter B. Galvin, dan Greg Gagne, buku ini merupakan sumber daya penting bagi mahasiswa, pendidik, dan profesional di bidang ilmu komputer.',
                'total_copies' => 97,
                'available_copies' => 97,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_rkMFYr5J0.png',
                'summary' => 'Operating System Concepts memberikan eksplorasi mendalam tentang sistem operasi, dimulai dengan pengenalan peran fundamental mereka dalam komputasi. Buku ini menjelaskan bagaimana sistem operasi mengelola sumber daya perangkat keras, seperti CPU, memori, dan penyimpanan, untuk memastikan operasi yang efisien dan andal.'
            ],
            [
                'id' => 'fe03e013-53b8-4574-9ca8-caec69a9b16c',
                'title' => 'Algorithms',
                'author' => 'Robert Sedgewick and Kevin Wayne',
                'genre' => 'Computer Science',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_dr-f_LPwA.png',
                'cover_color' => '#bf1e2e',
                'description' => 'Algorithms oleh Robert Sedgewick dan Kevin Wayne adalah panduan yang komprehensif dan berwibawa untuk memahami algoritma dan perannya dalam komputasi modern. Dianggap sebagai teks dasar dalam ilmu komputer, buku ini mencakup beragam algoritma, mulai dari pengurutan dan pencarian hingga pemrosesan graf dan manipulasi string.',
                'total_copies' => 321,
                'available_copies' => 318,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_KSZGUHg5R.png',
                'summary' => 'Algorithms adalah eksplorasi menyeluruh tentang prinsip-prinsip algoritmik dan aplikasinya. Buku ini dimulai dengan dasar-dasar, memperkenalkan algoritma dasar seperti pengurutan dan pencarian. Topik-topik dasar ini dibahas secara mendalam, menjelaskan pentingnya dalam menangani data secara efisien dan efektif.'
            ],
            [
                'id' => '585df184-991b-4edf-9902-f8531c3a81d9',
                'title' => 'The Clean Coder',
                'author' => 'Robert C. Martin',
                'genre' => 'Software',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_EE5klEyX0.png',
                'cover_color' => '#060709',
                'description' => 'The Clean Coder oleh Robert C. Martin adalah panduan penting bagi para pengembang perangkat lunak yang bercita-cita mencapai standar profesionalisme tertinggi. Ditulis oleh salah satu tokoh paling dihormati di komunitas rekayasa perangkat lunak, buku ini melampaui keterampilan teknis, berfokus pada pola pikir, etika, dan praktik yang mendefinisikan seorang programmer profesional.',
                'total_copies' => 35,
                'available_copies' => 35,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_50K9AmWND.png',
                'summary' => 'The Clean Coder menggali prinsip-prinsip dan praktik pengembangan perangkat lunak profesional. Buku ini dimulai dengan mendefinisikan apa artinya menjadi seorang programmer profesional, menekankan pentingnya mengambil tanggung jawab atas pekerjaan Anda dan bertindak dengan integritas.'
            ],
            [
                'id' => 'cea639ce-ee90-4ef9-9fef-c9562a247e99',
                'title' => 'The Lean Startup',
                'author' => 'Eric Ries',
                'genre' => 'Software',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_XyoNwHCdwe.png',
                'cover_color' => '#1E73BE',
                'description' => 'The Lean Startup oleh Eric Ries adalah panduan untuk membangun dan mengelola startup dengan cara yang memaksimalkan inovasi sambil meminimalkan usaha yang sia-sia. Buku ini memperkenalkan konsep metodologi "Lean Startup", yang berfokus pada mengubah ide menjadi produk dengan cepat, mengujinya dengan pelanggan nyata, dan belajar dari umpan balik mereka untuk menyempurnakan dan meningkatkan.',
                'total_copies' => 17,
                'available_copies' => 17,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_uiRdVQTTm.png',
                'summary' => 'The Lean Startup oleh Eric Ries adalah panduan untuk membangun dan mengelola startup dengan cara yang memaksimalkan inovasi sambil meminimalkan usaha yang sia-sia. Pendekatan ini membantu para pengusaha menciptakan bisnis yang sukses dengan menghindari periode pengembangan yang panjang tanpa pengujian.'
            ],
            [
                'id' => '68f7c183-b995-4ba3-a644-30110ebb932e',
                'title' => 'Atomic Habits',
                'author' => 'James Clear',
                'genre' => 'Self Help',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_HOCexO5Ms.png',
                'cover_color' => '#ffffff',
                'description' => 'Atomic Habits oleh James Clear adalah buku tentang bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan transformasi signifikan dari waktu ke waktu. Clear menekankan bahwa kebiasaan adalah bunga majemuk dari pengembangan diri—tindakan kecil yang diulang secara konsisten pada akhirnya akan menghasilkan hasil yang luar biasa.',
                'total_copies' => 1200,
                'available_copies' => 1200,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_WyfBbHfTp.png',
                'summary' => 'Atomic Habits oleh James Clear adalah buku tentang bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan transformasi signifikan dari waktu ke waktu. Clear menekankan bahwa kebiasaan adalah bunga majemuk dari pengembangan diri.'
            ],
            [
                'id' => 'b6b9cc5d-95fd-488e-b1df-2a805678b430',
                'title' => 'React in Action',
                'author' => 'Mark Tielens Thomas',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_rzjr6TrKF.png',
                'cover_color' => '#302428',
                'description' => 'React in Action oleh Mark Tielens Thomas adalah panduan praktis untuk menguasai React, sebuah pustaka JavaScript populer untuk membangun antarmuka pengguna. Buku ini sangat ideal bagi para pengembang yang ingin belajar React dari dasar dan bagi mereka yang ingin memperdalam pemahaman tentang ekosistemnya.',
                'total_copies' => 57,
                'available_copies' => 57,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_jO3MUj8-s.png',
                'summary' => 'React in Action oleh Mark Tielens Thomas adalah panduan praktis untuk menguasai React. Buku ini dimulai dengan memperkenalkan dasar-dasar React, termasuk komponen, JSX, props, dan manajemen state, lalu menjelajahi topik-topik yang lebih canggih.'
            ],
            [
                'id' => '17a58b62-0258-45a5-8b8b-9a21a6d6630c',
                'title' => 'JavaScript: The Good Parts',
                'author' => 'Douglas Crockford',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_-xOn0_b32.png',
                'cover_color' => '#00a199',
                'description' => 'JavaScript: The Good Parts oleh Douglas Crockford adalah panduan ringkas untuk memahami dan menggunakan fitur-fitur terbaik JavaScript sambil menghindari perangkapnya. Buku ini dirancang untuk para pengembang yang ingin menulis kode JavaScript yang bersih, efisien, dan andal.',
                'total_copies' => 501,
                'available_copies' => 500,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_KOYG_-R2J.png',
                'summary' => 'JavaScript: The Good Parts oleh Douglas Crockford adalah panduan ringkas untuk memahami dan menggunakan fitur-fitur terbaik JavaScript sambil menghindari perangkapnya. Crockford mengidentifikasi "bagian-bagian yang baik" dari JavaScript, seperti sifatnya yang berorientasi objek dinamis dan kemampuan pemrograman fungsional.'
            ],
            [
                'id' => 'd125678e-80d7-4ba8-97a6-cc6ee4b980ef',
                'title' => 'Eloquent Javascript',
                'author' => 'Marijn Haverbeke',
                'genre' => 'Programming',
                'rating' => 5,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_acYPV3jV0.png',
                'cover_color' => '#F8D347',
                'description' => 'Eloquent JavaScript oleh Marijn Haverbeke adalah penyelaman mendalam ke dalam JavaScript, yang dirancang untuk para pengembang yang ingin menguasai bahasa ini. Buku ini menggabungkan penjelasan yang jelas, contoh-contoh praktis, dan latihan untuk membantu pembaca memahami baik dasar-dasar maupun fitur-fitur canggih JavaScript.',
                'total_copies' => 121,
                'available_copies' => 120,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_l0umqa2H6.png',
                'summary' => 'Eloquent JavaScript oleh Marijn Haverbeke adalah penyelaman mendalam ke dalam JavaScript. Buku ini dimulai dengan pengenalan konsep-konsep pemrograman dan dengan cepat beralih ke dasar-dasar JavaScript, termasuk variabel, fungsi, dan struktur kontrol.'
            ],
            [
                'id' => '383a8140-08b8-4c7c-97a7-e1bc68dc1488',
                'title' => 'Fullstack React: The Complete Guide to ReactJS and Friends',
                'author' => 'Accomazzo, Greif, and Murray',
                'genre' => 'Web Development',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_aiko1JtEn.png',
                'cover_color' => '#eac8bf',
                'description' => 'Fullstack React: The Complete Guide to ReactJS and Friends oleh Accomazzo, Greif, dan Murray adalah sumber daya komprehensif bagi para pengembang yang ingin menguasai React dan membangun aplikasi full-stack.',
                'total_copies' => 11,
                'available_copies' => 11,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_0HxM1wQe62.png',
                'summary' => 'Fullstack React adalah sumber daya komprehensif bagi para pengembang yang ingin menguasai React. Buku ini menyediakan tutorial langkah demi langkah, proyek langsung, dan wawasan mendalam tentang ekosistem React, menjadikannya panduan yang sangat baik bagi pemula maupun pengembang berpengalaman.'
            ],
            [
                'id' => 'cc625b42-6852-44af-b3a3-e668fa967b8e',
                'title' => 'Cracking the Coding Interview',
                'author' => 'Gayle Laakmann McDowell',
                'genre' => 'Programming',
                'rating' => 4,
                'cover_url' => 'https://ik.imagekit.io/pwd17k26p/books/covers/file_yryJFVYWd.png',
                'cover_color' => '#97cc02',
                'description' => 'Cracking the Coding Interview oleh Gayle Laakmann McDowell adalah panduan komprehensif bagi para insinyur perangkat lunak yang sedang mempersiapkan wawancara teknis. Buku ini penuh dengan wawasan, strategi, dan lebih dari 180 pertanyaan pemrograman yang menyimulasikan skenario wawancara nyata.',
                'total_copies' => 32,
                'available_copies' => 32,
                'video_url' => 'https://ik.imagekit.io/pwd17k26p/books/videos/file_vcXsdjkqw.png',
                'summary' => 'Cracking the Coding Interview oleh Gayle Laakmann McDowell adalah panduan komprehensif bagi para insinyur perangkat lunak yang mempersiapkan wawancara teknis. Buku ini tidak hanya memberikan solusi tetapi juga penjelasan rinci untuk membantu pembaca memahami alasan di baliknya dan meningkatkan keterampilan pemecahan masalah mereka.'
            ]
        ];

        DB::table('books')->insert($books);
    }
}
