

const content = [
    {
      title: "Python",
      text: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed."

      

    },




    { title: "JavaScript", text: "Well, from the server side, this programming language is mostly implemented for database needs. The way it works is almost the same as other server-side programming languages, such as C# or Java. However, the thing that makes the difference is that JavaScript works non-blocking. It means. When the program is running, the program will not stop at just one process. The system will start preparing the next command." },



    { title: "Cad Title 3", text: "Some text for cad 3" },


  ];
  let currentIndex = 0;
  
  const titleElem = document.querySelector(".cad .conten h2");
  const textElem = document.querySelector(".cad .conten p");
  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");

  
  function updateContent() {
    
    const currentContent = content[currentIndex];
    titleElem.textContent = currentContent.title;
    textElem.textContent = currentContent.text;
  }
  
  function goToPrevious() {
    if (currentIndex > 0) {
      currentIndex--;
      updateContent();
    }
  }
  
  function goToNext() {
    if (currentIndex < content.length - 1) {
      currentIndex++;
      updateContent();
    }
  }
  
  prevBtn.addEventListener("click", goToPrevious);
  nextBtn.addEventListener("click", goToNext);
  
  updateContent();
