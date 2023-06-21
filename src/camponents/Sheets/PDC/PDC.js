import React , { useRef }from 'react';
import html2pdf from 'html2pdf.js';
import './pdc.css';

const PDC = () => {
    const sheetRef = useRef(null);
    // convert in to pdf 
    const convertToPdf = () => {
    const element = sheetRef.current;
    const opt = {
      margin: 1,
      filename: 'PDC.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

    //Sticky Notes
    const AddStikeyNotes = () => {
	var noteText = document.getElementById("value");
	var notevale = noteText.value;
	var poerion1 = document.querySelector('#portion'); 
	const portion = document.querySelector('#portion').value;
	var newelement = document.createElement("div");
	if(notevale==="" || notevale===null)
	{
		alert("Please Write Something ");
	}
	else{
		switch(portion){
			case "Purpose": 
			const Purpose = document.getElementById("divpur").childElementCount;
			if( Purpose >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepur").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpur');
				con.appendChild(newelement); 
			}
			break;
			case "Product Experience": 
			const ProductExperience = document.getElementById("divpex").childElementCount;
			if( ProductExperience >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepex").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divpex');
				con.appendChild(newelement);
			} 
			break;
			case "Customer Revalidation": 
			const CustomerRevalidation = document.getElementById("divcustrev").childElementCount;
			if( CustomerRevalidation >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placecustrev").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divcustrev');
				con.appendChild(newelement); 
			}
			break;
            case "Product Functions": 
			const ProductFunctions = document.getElementById("divpfun").childElementCount;
			if( ProductFunctions >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepfun").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divpfun');
				con.appendChild(newelement); 
			}
			break;
            case "Product Features": 
			const ProductFeatures = document.getElementById("divpfea").childElementCount;
			if( ProductFeatures >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepfea").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divpfea');
				con.appendChild(newelement); 
			}
			break;
            case "People": 
			const People = document.getElementById("divp").childElementCount;
			if( People >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placep").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divp');
				con.appendChild(newelement); 
			}
			break;
            case "Components": 
			const Components = document.getElementById("divc").childElementCount;
			if( Components >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placec").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divc');
				con.appendChild(newelement); 
			}
			break;
            case "RRR": 
			const RRR = document.getElementById("divrrr").childElementCount;
			if( RRR >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placerrr").innerText = " ";
				newelement.className = 'boxpdc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divrrr');
				con.appendChild(newelement); 
			}
			break;
			
			default: alert("Select Something");
		}
	}
	noteText.value = '';
}

//Sheet Header
function setheader()
{
   var Htime = document.getElementById("time").value;
   var Hdate = document.getElementById("date").value;
   var Hversion = document.getElementById("version").value;
   
    if(Htime === "" || Htime === null || Hdate === "" || Hdate === null  || Hversion === "" || Hversion === null ){
            alert("Fill all fields ");
    }
    else
    {
    let time = document.getElementById("d111");
    let date = document.getElementById("d222");
    let version = document.getElementById("d333");
    if (time && date && version) {
		time.style.backgroundColor = "yellow";
		date.style.backgroundColor = "yellow";
		version.style.backgroundColor = "yellow";
	  }
    time.innerText=Htime;
    date.innerText=Hdate;
    version.innerText=Hversion;
    }
}


  return (
    <div className="background">
          {/* sidebar */}
          <form action="#">
            <div className="sidebarPDC" id="sidebar">
              <h3 className="elementtextPDC">ELEMENTS</h3>
              <input type="text" className="inputsPDC" placeholder="Time" id="time" onFocus={(e) => (e.target.type = 'time')} required />
              <input type="text" className="inputsPDC" placeholder="Date" id="date" onFocus={(e) => (e.target.type = 'date')} required />
              <input type="text" className="inputsPDC" placeholder="version" id="version" minLength="1" maxLength="4" required />
              <button type="button" value="Add" className="sidebuttonPDC" id="setb" onClick={setheader}>Set</button>
              <select name="element" className="inputsPDC" id="portion">
                <option value="Select" selected>Select Portion</option>
                <option value="Purpose">Purpose</option>
                <option value="Product Experience">Product Experience</option>
                <option value="Customer Revalidation">Customer Revalidation</option>
                <option value="Product Functions">Product Functions</option>
                <option value="People">People</option>
                <option value="Product Features">Product Features</option>
                <option value="RRR">Reject, Redesign, Retain</option>
                <option value="Components">Components</option>
              </select>
              {/* <input type="number" minLength="1" maxLength="1"  placeholder="Enter numbers of elements(1 to 9)" className="inputs" id="number" required/> */}
              <input type="text" className="inputsPDC inpu" placeholder="Element name" id="value" minLength="1" maxLength="100" required />
              <div id="inputs1"></div>
              <button type="button" value="Add" className="sidebuttonPDC" onClick={AddStikeyNotes} id="btn1">Add</button>
              <button type="button" value="Reset" className="sidebuttonPDC" onClick={() => window.location.reload()} id="btn2">Reset</button>
            </div>
          </form>

          {/* Page Content */}
          <div className="col2pdc">
            {/* mainsheetpdc */}
            <div id="mainsheetpdc" ref={sheetRef}>
              {/* sheetheader */}
              <div className="sheetheaderpdc">
                <div className="pdc">&nbsp; Product Development Canvas</div>
                <div className="tdvpdc ">&nbsp; Time/Date/Version
                  <div>
                    <div className="timepdc" id="d111"></div>/
                    <div className="datepdc" id="d222"></div>/
                    <div className="versionpdc" id="d333"></div>
                  </div>
                </div>
              </div>
              <div className="sheetpdc">
                <div className="purpdc border1" id="divpur">
                  &nbsp;Purpose
                  <div className="placeh" id="placepur" contentEditable="false" data-placeholder="What  is the purpose of this concept you're developing? - Does it solve a problem, or it enhances a a certain experience? -is it serving a need or it is trying to create a new need or tap an untapped need?"></div>
                </div>
                <div className="pe border1" id="divpex">
                  &nbsp;Product Experience
                  <div className="placeh" id="placepex" contentEditable="false" data-placeholder="Define what your customer should feel like when he uses your product/service? What emotions, feelings would define his experience? Feeling of comfort, convenience, or feeling of buying more with less(cost conscious) or feeling of greater security safety etc."></div>
                </div>
                <div className="box1pdc border1" id="divcustrev">
                  &nbsp;Customer Revalidation
                  <div className="placeh" id="placecustrev" contentEditable="false" data-placeholder="Once you're finished with your feature set, test with the customer Aisori

                            the features functions are useful, Speak to the customerluser"></div>
                </div>
                <div className="box2pdc border1" id="divpfun">
                  &nbsp;Product Functions
                  <div className="placeh" id="placepfun" style={{ lineHeight: '10px' }} contentEditable="false" data-placeholder="Functions are a products answer to user problems/need. They do something that user wants. They are often verbs in nature. Every function is powered by many features. Multitasking is a function. Browser tabs is a feature that powers the multitasking feature. A function can have one or more features powering it. Functions are very generic in nature, features are often more specific Functions can be similar to product experience. Safety (product function) provides a feeling of safety (product experience)"></div>
                </div>
                <div className="box3pdc border1" id="divpfea">
                  &nbsp; Product Features
                  <div className="placeh" id="placepfea" style={{ lineHeight: '10px' }} contentEditable="false" data-placeholder="Product features are specific. One or more features will power a function. Antilock Brakes, Airbags are fetures that power the safety function. Browser tabs, Apple's home button to multitask between apps are features powering the mutitasking function Each feature will have many components/sub components powering it. Sometimes a very popular component becomes a featurein itself. Like car stero is a major components and a feature at the sametime powering the in car entertainment function powering entertainment as a product experience."></div>
                </div>
                <div className="box4pdc border1" id="divp">
                  &nbsp;People
                  <div className="placeh" id="placep" contentEditable="false" data-placeholder="Who is the key customer segment who will use this product /serice or the end product of the concept you're pusing?

                           Write hem about them, describe them a little"></div>
                </div>
                <div className="main-contentpdc border1" id="divc">
                  &nbsp; Components
                  <div className="placeh" id="placec" style={{ lineHeight: '10px' }} contentEditable="false" data-placeholder="Components build up the features. For a airbag it will comprise a list of component like bags, triggers etc, that go into making it. For a tabbed browser it will comprise of various chunks of code that will make the tabs work. In cases where the feature is a major component, you could list here the auxilliary components that are required to make the major component work. You can also list new adjustments and innovations you're planning here at the component level."></div>
                </div>
                <div className="RRR border1" id="divrrr">
                  &nbsp;Reject, Redesign, Retain
                  <div className="placeh" id="placerrr" contentEditable="false" data-placeholder="Post customer validation reject, those functions or features that the customers didnt find useful Redesign those that were partially useful and retain those met the bar terate with this until all unctions/features ar eaccepted"></div>
                </div>
              </div>
            </div>
            {/*button section  */}
            <button type="button" className="bottombuttonspdc" id="dow" onClick={convertToPdf}>Download Sheet</button>
            <button type="button" className="bottombuttonspdc" id="savepdc">Save Sheet</button>
            <button type="button" className="bottombuttonspdc" onClick="window.history.back()" id="Homepdc">Back Home</button>
          </div>
        </div>
  )
}

export default PDC