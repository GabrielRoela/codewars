const students = [
    {
      id: 6,
      firstName: 'John',
      lastName: 'Timothy',
      email: 'Timothy@gmail.com',
      imageUrl: '/students/Tim+Berners-Lee.png',
      description:
        'Sir Timothy John “Tim” Berners-Lee also known as “TimBL,” is a British computer scientist, best known as the inventor of the World Wide Web. He made a proposal for an information management system in March 1989 and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet. Berners-Lee is the director of the World Wide Web Consortium (W3C), which oversees the Web’s continued development.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 3,
      campus: {
        id: 3,
        name: 'Georgia State University',
        imageUrl: '/campuses/Georgia_State_Panthers_logo_PNG1.png',
        address: 'Atlanta, GA 30302',
        description:
          'Georgia State University (Georgia State, State, or GSU) is a public research university in Atlanta, Georgia.[14] Founded in 1913, it is one of the University System of Georgia four research universities. It is also the largest institution of higher education by enrollment based in Georgia and is in the top 10 in the nation in number of students with a diverse majority-minority student population of around 54,000 students, including approximately 33,000 undergraduate and graduate students at the main campus downtown.',
        createdAt: '2022-11-12T09:06:37.617Z',
        updatedAt: '2022-11-12T09:06:37.617Z',
      },
    },
    {
      id: 1,
      firstName: 'Dennis',
      lastName: 'Ritchies',
      email: 'Ritchie@gmail.com',
      imageUrl: '/students/Dennis+Ritchie.png',
      description:
        'Dennis MacAlistair Ritchie was an American computer scientist who “helped shape the digital era”. He created the C programming language and with long-time colleague Ken Thompson, the Unix operating system. Ritchie and Thompson received the Turing Award from the ACM in 1983, the Hamming Medal from the IEEE in 1990 and the National Medal of Technology from President Clinton in 1999. Ritchie was the head of Lucent Technologies System Software Research Department when he retired in 2007.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.646Z',
      updatedAt: '2022-11-12T09:06:37.663Z',
      campusId: 1,
      campus: {
        id: 1,
        name: 'Alabam State University',
        imageUrl: '/campuses/Alabam_State_Hornets_logo_PNG1.png',
        address: '915 S Jackson St, Montgomery, AL 36104',
        description:
          'Alabama State University (ASU) is a public historically black university in Montgomery, Alabama. Founded in 1867, ASU is a member-school of the Thurgood Marshall College Fund.',
        createdAt: '2022-11-12T09:06:37.616Z',
        updatedAt: '2022-11-12T09:06:37.616Z',
      },
    },
    {
      id: 2,
      firstName: 'Bjarne ',
      lastName: 'Stroustrup',
      email: 'Stroustrup@gmail.com',
      imageUrl: '/students/Bjarne+Stroustrup.png',
      description:
        'Bjarne Stroustrup is a Danish computer scientist, most notable for the creation and development of the widely used C++ programming language. He is a Distinguished Research Professor and holds the College of Engineering Chair in Computer Science at Texas A&M University, a visiting professor at Columbia University, and works at Morgan Stanley.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.646Z',
      updatedAt: '2022-11-12T09:06:37.663Z',
      campusId: 1,
      campus: {
        id: 1,
        name: 'Alabam State University',
        imageUrl: '/campuses/Alabam_State_Hornets_logo_PNG1.png',
        address: '915 S Jackson St, Montgomery, AL 36104',
        description:
          'Alabama State University (ASU) is a public historically black university in Montgomery, Alabama. Founded in 1867, ASU is a member-school of the Thurgood Marshall College Fund.',
        createdAt: '2022-11-12T09:06:37.616Z',
        updatedAt: '2022-11-12T09:06:37.616Z',
      },
    },
    {
      id: 3,
      firstName: 'Anders',
      lastName: 'Hejlsberg',
      email: 'Torvalds@gmail.com',
      imageUrl: '/students/Anders+Hejlsber.png',
      description:
        'Anders Hejlsberg is a prominent Danish software engineer who co-designed several popular and commercially successful programming languages and development tools. He is creator of popular programming language C#. He was the original author of Turbo Pascal and the chief architect of Delphi. He currently works for Microsoft as the lead architect of C# and core developer on TypeScript.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 2,
      campus: {
        id: 2,
        name: 'George Mason University',
        imageUrl: '/campuses/George_Mason_Patriots_logo_PNG3.png',
        address: '4400 University Dr, Fairfax, VA 22030',
        description:
          'George Mason University (George Mason, Mason, or GMU) is a public research university in Fairfax County, Virginia with an independent City of Fairfax, Virginia postal address in the Washington, D.C. Metropolitan Area.[9] The university was originally founded in 1949 as a Northern Virginia regional branch of the University of Virginia. Named after Founding Father of the United States George Mason in 1959, it became an independent university in 1972. The school has since grown into the largest public university in the Commonwealth of Virginia.[10][11][1] Mason operates four campuses in Virginia (Fairfax, Arlington, Front Royal, and Prince William), as well as a campus in Incheon, South Korea. The flagship campus is in Fairfax.',
        createdAt: '2022-11-12T09:06:37.616Z',
        updatedAt: '2022-11-12T09:06:37.616Z',
      },
    },
    {
      id: 4,
      firstName: 'James',
      lastName: 'Arthur',
      email: 'Arthur@gmail.com',
      imageUrl: '/students/James+Gosling.png',
      description:
        'James Arthur Gosling is a Canadian computer scientist, best known as the father of the Java programming language. James has also made major contributions to several other software systems, such as NeWS and Gosling Emacs. Due to his extra-ordinary achievements Gosling was elected to Foreign Associate member of the United States National Academy of Engineering.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 2,
      campus: {
        id: 2,
        name: 'George Mason University',
        imageUrl: '/campuses/George_Mason_Patriots_logo_PNG3.png',
        address: '4400 University Dr, Fairfax, VA 22030',
        description:
          'George Mason University (George Mason, Mason, or GMU) is a public research university in Fairfax County, Virginia with an independent City of Fairfax, Virginia postal address in the Washington, D.C. Metropolitan Area.[9] The university was originally founded in 1949 as a Northern Virginia regional branch of the University of Virginia. Named after Founding Father of the United States George Mason in 1959, it became an independent university in 1972. The school has since grown into the largest public university in the Commonwealth of Virginia.[10][11][1] Mason operates four campuses in Virginia (Fairfax, Arlington, Front Royal, and Prince William), as well as a campus in Incheon, South Korea. The flagship campus is in Fairfax.',
        createdAt: '2022-11-12T09:06:37.616Z',
        updatedAt: '2022-11-12T09:06:37.616Z',
      },
    },
    {
      id: 5,
      firstName: 'Linus',
      lastName: 'Torvalds',
      email: 'Torvalds@gmail.com',
      imageUrl: '/students/Linus+Torvalds.png',
      description:
        'Linus Benedict Torvalds is a Finnish American software engineer, who was the principal force behind the development of the Linux kernel. He later became the chief architect of the Linux kernel, and now acts as the project’s coordinator. He also created the revision control system Git as well as the diving log software Subsurface. He was honored, along with Shinya Yamanaka, with the 2012 Millennium Technology Prize by the Technology Academy Finland in recognition of his creation of a new open source operating system for computers leading to the widely used Linux kernel.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 2,
      campus: {
        id: 2,
        name: 'George Mason University',
        imageUrl: '/campuses/George_Mason_Patriots_logo_PNG3.png',
        address: '4400 University Dr, Fairfax, VA 22030',
        description:
          'George Mason University (George Mason, Mason, or GMU) is a public research university in Fairfax County, Virginia with an independent City of Fairfax, Virginia postal address in the Washington, D.C. Metropolitan Area.[9] The university was originally founded in 1949 as a Northern Virginia regional branch of the University of Virginia. Named after Founding Father of the United States George Mason in 1959, it became an independent university in 1972. The school has since grown into the largest public university in the Commonwealth of Virginia.[10][11][1] Mason operates four campuses in Virginia (Fairfax, Arlington, Front Royal, and Prince William), as well as a campus in Incheon, South Korea. The flagship campus is in Fairfax.',
        createdAt: '2022-11-12T09:06:37.616Z',
        updatedAt: '2022-11-12T09:06:37.616Z',
      },
    },
    {
      id: 9,
      firstName: 'Guido',
      lastName: 'van Rossum',
      email: 'vanRossum@gmail.com',
      imageUrl: '/students/Guido+van+Rossum.png',
      description:
        'Guido van Rossum is a Dutch computer programmer who is best known as the author of the Python programming language. In the Python community, Van Rossum is known as a “Benevolent Dictator For Life” (BDFL), meaning that he continues to oversee the Python development process, making decisions where necessary. He was employed by Google from 2005 until December 7th 2012, where he spent half his time developing the Python language. In January 2013, Van Rossum started working for Dropbox.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.648Z',
      updatedAt: '2022-11-12T09:06:37.665Z',
      campusId: 5,
      campus: {
        id: 5,
        name: 'Kansas University',
        imageUrl: '/campuses/Kansas_Jayhawks_logo_PNG3.png',
        address: '1450 Jayhawk Blvd, Lawrence, KS 66045',
        description:
          'The University of Kansas (KU) is a public research university with its main campus in Lawrence, Kansas, United States, and several satellite campuses, research and educational centers, medical centers, and classes across the state of Kansas.[12] Two branch campuses are in the Kansas City metropolitan area on the Kansas side: the university medical school and hospital in Kansas City, Kansas, the Edwards Campus in Overland Park. There are also educational and research sites in Garden City, Hays, Leavenworth, Parsons, and Topeka, an agricultural education center in rural north Douglas County, and branches of the medical school in Salina and Wichita. The university is a member of the Association of American Universities and is classified among "R1: Doctoral Universities – Very high research activity".',
        createdAt: '2022-11-12T09:06:37.617Z',
        updatedAt: '2022-11-12T09:06:37.617Z',
      },
    },
    {
      id: 10,
      firstName: 'Donald',
      lastName: 'Knuth',
      email: 'Knuth@gmail.com',
      imageUrl: '/students/Donald+Kuth.png',
      description:
        'Donald Ervin Knuth is an American computer scientist, mathematician, and Professor Emeritus at Stanford University. He is the author of the multi-volume work The Art of Computer Programming. Knuth has been called the “father” of the analysis of algorithms. He contributed to the development of the rigorous analysis of the computational complexity of algorithms and systematized formal mathematical techniques for it. In the process he also popularized the asymptotic notation. Knuth is the creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system and the Computer Modern family of typefaces.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.648Z',
      updatedAt: '2022-11-12T09:06:37.665Z',
      campusId: 7,
      campus: {
        id: 7,
        name: 'North Carolina University',
        imageUrl: '/campuses/North_Carolina_AT_Aggies_logo_PNG5.png',
        address: 'Chapel Hill, NC',
        description:
          'The University of North Carolina is the multi-campus public university system for the state of North Carolina. Overseeing the state 16 public universities and the NC School of Science and Mathematics, it is commonly referred to as the UNC System to differentiate it from its flagship, UNC-Chapel Hill.',
        createdAt: '2022-11-12T09:06:37.617Z',
        updatedAt: '2022-11-12T09:06:37.617Z',
      },
    },
    {
      id: 7,
      firstName: 'Brian',
      lastName: 'Kernighan',
      email: 'Kernighan@gmail.com',
      imageUrl: '/students/Brian+Kernighan.png',
      description:
        'Brian Wilson Kernighan is a Canadian computer scientist who worked at Bell Labs alongside Unix creators Ken Thompson and Dennis Ritchie and contributed to the development of Unix. He is also coauthor of the AWK and AMPL programming languages. Kernighan’s name became widely known through co-authorship of the first book on the C programming language with Dennis Ritchie.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 4,
      campus: {
        id: 4,
        name: 'Gonzaga University',
        imageUrl: '/campuses/Gonzaga_Bulldogs_logo_PNG5.png',
        address: '502 E Boone Ave, Spokane, WA 99258',
        description:
          'Gonzaga University (GU) (/ɡənˈzæɡə/) is a private Jesuit university in Spokane, Washington.[5][6] It is accredited by the Northwest Commission on Colleges and Universities.[7] Founded in 1887 by Joseph Cataldo, an Italian-born priest and Jesuit missionary, the university is named after the young Jesuit saint Aloysius Gonzaga.[8] The campus houses 105 buildings on 152 acres (62 ha) of grassland alongside the Spokane River, in a residential setting a half-mile (800 m) from downtown Spokane.',
        createdAt: '2022-11-12T09:06:37.617Z',
        updatedAt: '2022-11-12T09:06:37.617Z',
      },
    },
    {
      id: 8,
      firstName: 'Kenneth ',
      lastName: 'Thompson',
      email: 'Kernighan@gmail.com',
      imageUrl: '/students/Ken+Thompson.png',
      description:
        'Kenneth Thompson commonly referred to as ken in hacker circles is an American pioneer of computer science. Having worked at Bell Labs for most of his career, Thompson designed and implemented the original Unix operating system. He also invented the B programming language, the direct predecessor to the C programming language, and was one of the creators and early developers of the Plan 9 operating systems. Since 2006, Thompson works at Google, where he co-invented the Go programming language.',
      gpa: '4',
      createdAt: '2022-11-12T09:06:37.647Z',
      updatedAt: '2022-11-12T09:06:37.664Z',
      campusId: 4,
      campus: {
        id: 4,
        name: 'Gonzaga University',
        imageUrl: '/campuses/Gonzaga_Bulldogs_logo_PNG5.png',
        address: '502 E Boone Ave, Spokane, WA 99258',
        description:
          'Gonzaga University (GU) (/ɡənˈzæɡə/) is a private Jesuit university in Spokane, Washington.[5][6] It is accredited by the Northwest Commission on Colleges and Universities.[7] Founded in 1887 by Joseph Cataldo, an Italian-born priest and Jesuit missionary, the university is named after the young Jesuit saint Aloysius Gonzaga.[8] The campus houses 105 buildings on 152 acres (62 ha) of grassland alongside the Spokane River, in a residential setting a half-mile (800 m) from downtown Spokane.',
        createdAt: '2022-11-12T09:06:37.617Z',
        updatedAt: '2022-11-12T09:06:37.617Z',
      },
    },
  ];
  
  //sort this function by the lastName property
  
  //simpler implementation of an algorithm
  // students.sort((a, b) => {
  //   const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  
  //   names must be equal
  //   return 0;
  // });
  
  //way more fun way to do it.
  students.sort(sortByLastName)
  students.forEach(e => console.log(e.lastName))
  //gambiarra
  function sortByLastName(obj1,obj2){
    if(obj1.lastName === obj2.lastName){
      return 0
    }
  
    let arr1 = obj1.lastName.split('').map(e => e.toUpperCase())
    let arr2 = obj2.lastName.split('').map(e => e.toUpperCase())
  
    arr1filtered = arr1.filter((e,i) => e !== arr2[i]).join('')
    arr2filtered = arr2.filter((e,i) => e !== arr1[i]).join('')
  
    return arr1filtered.charCodeAt(0) - arr2filtered.charCodeAt(0)
  }