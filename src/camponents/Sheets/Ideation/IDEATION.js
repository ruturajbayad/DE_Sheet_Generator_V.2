import React , { useRef }from 'react';
import html2pdf from 'html2pdf.js';
import './ideation.css';

const IDEATION = () => {
    const sheetRef = useRef(null);
    // convert in to pdf 
  const convertToPdf = () => {
    const element = sheetRef.current;
    const opt = {
      margin: 1,
      filename: 'Ideation.pdf',
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
	if(notevale=="" || notevale==null)
	{
		alert("Please Write Something ");
	}
	else{
		switch(portion){
			case "People": 
			const People = document.getElementById("divp").childElementCount;
			if( People >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placep").innerText = " ";
				newelement.className = 'boxidt';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divp');
				con.appendChild(newelement); 
			}
			break;
			case "Activities": 
			const Activities = document.getElementById("diva").childElementCount;
			if( Activities >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placea").innerText = " ";
				newelement.className = 'boxidt';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('diva');
				con.appendChild(newelement);
			} 
			break;
			case "Location": 
			const Location = document.getElementById("divl").childElementCount;
			if( Location >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placel").innerText = " ";
				newelement.className = 'boxidt';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divl');
				con.appendChild(newelement); 
			}
			break;
            case "Props": 
			const Props = document.getElementById("divpo").childElementCount;
			if( Props >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepo").innerText = " ";
				newelement.className = 'boxidt';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpo');
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
   var pval = document.getElementById("pname").value;
   var tid = document.getElementById("tid").value;
   
    if(pval == "" || pval == null || tid == "" || tid == null ){
            alert("Fill all fields ");
    }
    else
    {
    let pdiv = document.getElementById("d00idt");
    let tdiv = document.getElementById("d11idt");
    pdiv.style.backgroundColor = "yellow";
    tdiv.style.backgroundColor= "yellow" ;
    pdiv.innerText=pval;
    tdiv.innerText=tid;
    }
}

  return (
    <div className="backgroundidt">
        {/* sidebar */}
        <form action="#">
          <div className="sidebar" id="sidebar">
            <h3 className="elementtext">ELEMENTS</h3>
            <input type="text" className="inputs" placeholder="Team ID" id="tid" minLength="1" maxLength="6" required />
            <input type="text" className="inputs" placeholder="Project Name" id="pname" minLength="1" maxLength="20" required />
            <button type="button" value="Add" className="sidebutton" id="setb" onClick={setheader}>Set</button>
            <select name="element" className="inputs" id="portion">
              <option value="Select">Select Portion</option>
              <option value="People">People</option>
              <option value="Activities">Activities</option>
              <option value="Location">Situation/Context/Location</option>
              <option value="Props">Props/Tools/Objects/Equipment</option>
            </select>
            <input type="text" className="inputs inpu" placeholder="Element name" id="value"  minLength="1" maxLength="100" required/>
            <div id="inputs1"></div>
            <button type="button" value="Add" className="sidebutton" onClick={AddStikeyNotes} id="btn1">Add</button>
            <button type="button" value="Reset" className="sidebutton" onClick={() => window.location.reload()} id="btn2">Reset</button>
          </div>
        </form>

        {/* Page Content */}
        <div className="col2idt">
          {/* mainsheet */}
          <div id="mainsheetidt" ref={sheetRef}>
            {/* sheetheader */}
            <div className="sheetheaderidt">
              <div className="ideation"><h5><b>The Ideanaut: Ideation Canvas</b></h5></div>
              <div className="Project" id="pdividt">Project: <div id="d00idt"></div></div>
              <div className="Team" id="tdividf">Team:<div id="d11idt"></div></div>
            </div>
            <div className="sheet">
              <div className="containeridt">
                <div className="borderidt" id="divp">
                  &nbsp; <b>People</b>
                  <div className="placeh" id="placep" contentEditable="false" data-placeholder="(Style, material & atmosphere) -Floor plan, Elements, features and special notes, Scenes"></div>
                </div>
              </div>
              <div className="container2idt">
                <div className="borderidt" id="diva">
                  &nbsp;<b>Activities</b>
                  <div className="placeh" id="placea" contentEditable="false" data-placeholder="(Style, material & atmosphere) -Floor plan, Elements, features and special notes, Scenes"></div>
                </div>
                <div className="borderidt" id="divl">
                  &nbsp; <b>Situation/Context/Location</b>
                  <div className="placeh" id="placel" contentEditable="false" data-placeholder="(Style, material & atmosphere) -Floor plan, Elements, features and special notes, Scenes"></div>
                </div>
              </div>

              <div className="container3idt">
                <div className="borderidt" id="divpo">
                  <b>&nbsp; Props/Tools/Objects/Equipment</b>
                  <div className="placeh" id="placepo" contentEditable="false" data-placeholder="(Style, material & atmosphere) -Floor plan, Elements, features and special notes, Scenes"></div>
                </div>
              </div>
            </div>
          </div>
          {/* button section */}
          <button type="button" className="bottombuttonsidt" id="dow" onClick={convertToPdf}>Download Sheet</button>
          <button type="button" className="bottombuttonsidt" id="save">Save Sheet</button>
          <button type="button" className="bottombuttonsidt" onClick={() => window.history.back()} id="Home">Back Home</button>
        </div>
      </div>
  )
}

export default IDEATION