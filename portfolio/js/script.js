const typing = document.querySelector("#animated-text");
const textLoad = () => {
    setTimeout(() => {
        typing.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        typing.textContent = "Web Designer";
    }, 4000);
    setTimeout(() => {
        typing.textContent = "Freelancer";
    }, 8000);
    setTimeout(() => {
    textLoad ()
    }, 12000);
}

textLoad();

// aside 

const up = document.querySelector(".up")
const footerWrapper = document.querySelector(".footer-wrapper")

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() 
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200) 
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section")
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++) 
        {
            allSection[i].classList.remove("active");
        } 
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector(`#${target}`).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener('click', function() 
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            up.classList.toggle("open");
            footerWrapper.classList.toggle("open");
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }

// go back btn

    const goTopBtn = document.querySelector(".up");
    goTopBtn.addEventListener('click', goTop);
    window.addEventListener("scroll", tracksScroll);

    function tracksScroll() {
        const offset = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
        if(offset > coords) {
            goTopBtn.classList.add("up--show");
        } 
        else {
            goTopBtn.classList.remove("up--show");
        }
    }

    function goTop() {
        if(window.pageYOffset > 0) {
            window.scrollBy(0, -35);
            setTimeout(goTop, 0);
        }
    }

// scroll animation

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}