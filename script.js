var retButton = $('.ret-btn');
var adtButton = $('.adt-btn');
var csButton = $('.cs-btn');
var hsButton = $('.hs-btn');
hsButton.on("click", doHS);
csButton.on("click", doCS);
adtButton.on("click", doADT);
retButton.on("click", doRET);

function doHS (){
  var HStitle = $(`.infoTitle`);
  var HStext = $(`.mfytxt`);
  HStitle.text("Financial Aid & Scholarships");
  HStext.text("Being a high school student in America is difficult as is. We are pressured to get into ivy league schools, which leaves a majority of students unprepared for the reality of student loan debts. As immigrants and children of immigrants, we often don’t recognize the majority of resources available for us to help prevent this. For refugees and immigrants, use the following websites to get a head start on saving for college: Go to JLVcollegecounseling.com for scholarships and CollegeGrant.net for financial aid tips");
  console.log(text.text);
  // console.log(`<a> "https://www.collegegrant.net/first-generation/"</a>`);

}

     
 // window.open('https://www.scholarships.com/financial-aid/college-scholarships/scholarship-directory/special-attributes/refugee-immigrant', '_blank');

function doCS (){
  var CStitle = $(`.infoTitle`);
  var CStext = $(`.mfytxt`);
  CStitle.text("Scholarships, Student Loan Debt, & Internships");
  CStext.text("As a college student in america, many of us feel external pressure by our families and society to get good grades and to get jobs. It's scary juggling workload and loans. As immigrants and children of immigrants, we often don’t recognize the majority of resources available to us to help stop this from happening to us. For refugees and immigrants, use the websites below to learn more about saving and budgeting during your college years: StudentAid.gov and NASFAA.org");
  console.log(text.text);
 }

function doADT (){
  var ADTtitle = $(`.infoTitle`);
  var ADTtext = $(`.mfytxt`);
  ADTtitle.text("Job Oppurtunities ");
  ADTtext.text("The transiton from one country to another can be difficult to adjust to when you've only known one way of living. Finding a way to support yourself and your family is challenging enough, without having to worry about taxes and governmental security. So many immigrants have no knowledge about the system, so they unknowingly fall into the trap of unemployment. To help out with this, we've included some resources for immigrants looking for work: ImmigrantForum.org and USCIS Career Services");
  console.log(text.text);
}
// }
function doRET (){
  var RETtitle = $(`.infoTitle`);
  var RETtext = $(`.mfytxt`);
  RETtitle.text("Social Security and Retirement");
  RETtext.text("Moving from one country to another can be hard enough as is. When the time comes to retire from work, many citzens don't know how to take the first step to ensure the process is a smooth one. For immigrants, this process can be much more complicated, especially for undocumented ones. Most newcomers to America don't understand the basics of the American retirement system. To help out with this, below we've included some resources for immigrants looking to retiree: SSA.gov and CitzenPath");
  console.log(text.text);
}

