const resume = Object.freeze({
    about: "True full-stack engineer working full-time on web-development since 2013. My experience ranges from backend development with LAMP stack, Node (with and without Typescript), MongoDB, RabbitMQ, Redis, to DevOps experience building Docker images, creating docker-compose.yml files to facilitate the Dev processes, managing Docker-swarm cluster's, on-premises infrastructure,  building CI/CD pipelines with BitBucket, to modern frontend development with Vue and React.",
    personalData: [
        { icon: "sarasa", text: "" },


    ],
    jobs: [
        {
            image: "dynamo.png",
            title: "Tech-lead / Full-Stack Engineer",
            company: "Dynamo Mobile",
            url: "https://www.dynamomovil.com/",
            from: "Jan 2021",
            description: "Responsible for architecture and design of new systems, improvement of existing solutions, mentoring and guidance of new team members into Dynamo's complex tech stack, and of course, a lot of coding!!!"
        },
        {
            image: "dynamo.png",
            title: "Full-Stack Engineer",
            company: "Dynamo Mobile",
            url: "https://www.dynamomovil.com/",
            from: "Mar 2018",
            to: "Dec 2020",
            description: "Responsable of maintaining and developing of new features to the Dynamo's SMS and SAT-Push platform, a self-service platform on which Dynamo customers can create, configure, run and watch the performance and statistics of SMS and SAT-push campaigns."
        },
        {
            image: "prisma.jpg",
            title: "Front-End Developer Engineer",
            company: "Prisma Medios de Pago",
            url: "https://www.prismamediosdepago.com/",
            from: "July 2017",
            to: "Feb 2018",
            description: "Responsable of developing the UI of the brand new self-service-terminals (SST) of the ICBC bank. The SST's UI are totally web-based, programmable using standard web technologies such as HTML, CSS, Javascript and JSON. This role also required a deep understanding of the SST hardware, and the BANELCO backend, in order to communicate properly with it from the UI."
        },
        {
            image: "bionomina.png",
            title: "Co-Founder and CTO",
            company: "BioNómina",
            url: "https://www.bionomina.com/",
            from: "Jan 2012",
            to: null,
            description: "Co-founder and developer of BioNomina, a SaaS platform for Time & Attendance control, which integrates with biometric T&A devices from major manufacturers."
        },

    ],
    skillGroups: [
        {
            groupName: "Front-End",
            skills: [
                "Vue(2)",
                "React (w/hooks)",
                "jQuery",
                "Vanilla JS",
                "HTML5",
                "CSS",
                "SASS",
            ]
        },
        {
            groupName: "Back-End",
            skills: [
                "Express (Node)",
                "socket.io (Node)",
                "Laravel (PHP)",
                "Lumen (PHP)",
                "Slim 3/4 (PHP)",
                "Yii2 (PHP)",
                "Symfony (PHP)",
                "Cake ORM (PHP)",
            ]
        },
        {
            groupName: "Database",
            skills: [
                "MySQL",
                "MongoDB",
                "Redis",
                "RabbitMQ",
            ]
        },
        {
            groupName: "Dev-Ops",
            skills: [
                "Docker",
                "docker build",
                "docker-compose",
                "CI/CD pipelines",
                "bash",
            ]
        },
        {
            groupName: "Languages",
            skills: [
                "Javascript",
                "Typescript",
                "PHP 5.6/7.x",
                "C#",
                "Java",
                "Python",
                "Go",
            ]
        },



    ],
    // Education degrees
    education: [
        {
            title: "Especialista en Telemática",
            subtitle: "IT specialist",
            graduationDate: "2010",
            institute: "Universidad Simón Bolívar",
            icon: "usb.svg",
        },
        {
            title: "Ingeniero Electrónico",
            subtitle: "B. Electronics Engineering",
            graduationDate: "2007",
            institute: "Universidad Simón Bolívar",
            icon: "usb.svg",
        }
    ]

});

export default resume;