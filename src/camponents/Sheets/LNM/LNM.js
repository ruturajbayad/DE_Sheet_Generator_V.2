import React , { useRef }from 'react';
import './lnm.css';
import html2pdf from 'html2pdf.js';

const LNM = () => {
	const sheetRef = useRef(null);
	// convert in to pdf 
	  const convertToPdf = () => {
		const element = sheetRef.current;
		const opt = {
		  margin: 1,
		  filename: 'LNM.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 2 },
		  jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
		};
		html2pdf().from(element).set(opt).save();
	  };
    //Sticky Notes
const AddStikeyNotes = () => {
	var noteText = document.getElementById("valuelnm");
	var notevale = noteText.value;
	var poerion1 = document.querySelector('#portionlnm'); 
	const portion = document.querySelector('#portionlnm').value;
	var newelement = document.createElement("div");
	if(notevale=="" || notevale==null)
	{
		alert("Please Write Something ");
	}
	else{
		switch(portion){
			
            case "II1": 
			const II1 = document.getElementById("b10lnm").childElementCount;
			if( II1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh10lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b10lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II2": 
			const II2 = document.getElementById("b11lnm").childElementCount;
			if( II2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh11lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b11lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II3": 
			const II3 = document.getElementById("b20lnm").childElementCount;
			if( II3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh20lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b20lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II4": 
			const II4 = document.getElementById("b21lnm").childElementCount;
			if( II4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh21lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b21lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III1": 
			const III1 = document.getElementById("b6lnm").childElementCount;
			if( III1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh6lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b6lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III2": 
			const III2 = document.getElementById("b7lnm").childElementCount;
			if( III2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh7lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b7lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III3": 
			const III3 = document.getElementById("b22lnm").childElementCount;
			if( III3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh22lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b22lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III4": 
			const III4 = document.getElementById("b23lnm").childElementCount;
			if( III4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh23lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b23lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV1": 
			const IV1 = document.getElementById("b2lnm").childElementCount;
			if( IV1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh2lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b2lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV2": 
			const IV2 = document.getElementById("b3lnm").childElementCount;
			if( IV2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh3lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b3lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV3": 
			const IV3 = document.getElementById("b24lnm").childElementCount;
			if( IV3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh24lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b24lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV4": 
			const IV4 = document.getElementById("b25lnm").childElementCount;
			if( IV4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh25lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b25lnm');
				con.appendChild(newelement); 
			}
			break;
			
			default: alert("Select Something");
		}
	}
	noteText.value = '';
}

//Sheet Header
const setheader =() =>
{
    var gid = document.getElementById("gidlnm").value;
    var date = document.getElementById("datelnm").value;
    var pname = document.getElementById("pnamelnm").value;
    if(gid == "" || gid == null || date == "" || date == null || pname == "" || pname == null){
            alert("Fill all fields ");
    }
    else
    {
    
    let d11 = document.getElementById("d11lnm");
    let d22 = document.getElementById("d22lnm");
    let d33 = document.getElementById("d33lnm");

    d11.innerText = gid;
    d22.innerText = date;
    d33.innerText = pname;
    }
}
  return (
    <div className="backgroundlnm">
          <form action="#">
            <div className="sidebarlnm" id="sidebarlnm">
              <h3 className="elementtextlnm">ELEMENTS</h3>
              <input
                type="text"
                className="inputslnm"
                placeholder="Group id"
                id="gidlnm"
                minLength="1"
                maxLength="6"
                required
              />
              <input
                type="text"
                className="inputslnm"
                placeholder="Date"
                id="datelnm"
				onFocus={(e) => (e.target.type = 'date')}
                required
              />
              <input
                type="text"
                className="inputslnm"
                placeholder="Purpose / Product Concept"
                id="pnamelnm"
                minLength="1"
                maxLength="20"
                required
              />

              <button
                type="button"
                value="Add"
                className="sidebuttonlnm"
                id="setblnm"
                onClick={setheader}
              >
                Set
              </button>
              <select name="element" className="inputslnm" id="portionlnm">
                <option value="Select" selected>
                  Select Portion
                </option>
                <option value="II1">BE II - Tools</option>
                <option value="II2">BE II - Applicable Standards</option>
                <option value="II3">BE II - Software</option>
                <option value="II4">BE II - Components Materials' Strength</option>

                <option value="III1">BE III - Tools</option>
                <option value="III2">BE III - Applicable Standards</option>
                <option value="III3">BE III -Software</option>
                <option value="III4">BE III - Components Materials' Strength</option>

                <option value="IV1">BE IV - Tools</option>
                <option value="IV2">BE IV - Applicable Standards</option>
                <option value="IV3">BE IV - Software</option>
                <option value="IV4">BE IV - Components Materials' Strength</option>
              </select>
              <input
                type="text"
                className="inputslnm"
                placeholder="Element name"
                id="valuelnm"
                minLength="1"
                maxLength="100"
                required
              />
              <div id="inputs1lnm"></div>
              <button
                type="button"
                value="Add"
                className="sidebuttonlnm"
                onClick={AddStikeyNotes}
                id="btn1lnm"
              >
                Add
              </button>
              <button
                type="button"
                value="Reset"
                className="sidebuttonlnm"
                onClick="window.location.reload()"
                id="btn2lnm"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="col2lnm">
            <div id="sheetlnm" ref={sheetRef}>
              <div className="sheetheaderlnm">
                <div className="Titlelnm">
                  <b>&nbsp;Learning Needs Matrix</b>
                </div>

                <div className="idlnm">
                  Group ID :- <div id="d11lnm"></div>
                </div>
                <div className="datelnm">
                  Date :- <div id="d22lnm"></div>
                </div>
              </div>

              <main>
                <div className="boxeslnm box1lnm" id="b1lnm">
                  Tools /<br /> Method / Theories / Application process involved
                </div>
                <div className="boxeslnm box2lnm" id="b2lnm">
                  <p>DURING</p>
                  <div className="placehlnm" id="placeh2lnm" contentEditable="false" data-placeholder=""></div>
                </div>

                <div className="boxeslnm box3lnm" id="b3lnm">
                  <p>BE IV</p>
                  <div className="placehlnm" id="placeh3lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box4lnm" id="b4lnm">
                  Applicable Standards and Design Specifications / Principle and Experiments
                </div>

                <div className="boxeslnm box5lnm"></div>
                <div className="boxeslnm box6lnm" id="b6lnm">
                  <p>DURING</p>
                  <div className="placehlnm" id="placeh6lnm" contentEditable="false" data-placeholder=""></div>
                </div>

                <div className="boxeslnm box7lnm" id="b7lnm">
                  <p>BE III</p>
                  <div className="placehlnm" id="placeh7lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box8lnm"></div>

                <div className="boxeslnm box9lnm"></div>
                <div className="boxeslnm box10lnm" id="b10lnm">
                  <p>DURING</p>
                  <div className="placehlnm" id="placeh10lnm" contentEditable="false" data-placeholder=""></div>
                </div>

                <div className="boxeslnm box11lnm" id="b11lnm">
                  <p>BE II</p>
                  <div className="placehlnm" id="placeh11lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box12lnm"></div>

                <div className="box13lnm" id="b13lnm">
                  Purpose / Product Concept <div id="d33lnm"></div>
                </div>

                <div className="boxeslnm box14lnm" id="b14lnm">
                  Software / Simulation / <br />Skill / Mathematical Requirement
                </div>
                <div className="boxeslnm box15lnm"></div>
                <div className="boxeslnm box16lnm"></div>
                <div className="boxeslnm box17lnm"></div>
                <div className="boxeslnm box18lnm"></div>
                <div className="boxeslnm box19lnm" id="b19lnm">
                  Components Materials' Strength Criteria (exploration-Varieties / Testing requirements)
                </div>
                <div className="boxeslnm box20lnm" id="b20lnm">
                  <div className="placehlnm" id="placeh20lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box21lnm" id="b21lnm">
                  <div className="placehlnm" id="placeh21lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box22lnm" id="b22lnm">
                  <div className="placehlnm" id="placeh22lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box23lnm" id="b23lnm">
                  <div className="placehlnm" id="placeh23lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box24lnm" id="b24lnm">
                  <div className="placehlnm" id="placeh24lnm" contentEditable="false" data-placeholder=""></div>
                </div>
                <div className="boxeslnm box25lnm" id="b25lnm">
                  <div className="placehlnm" id="placeh25lnm" contentEditable="false" data-placeholder=""></div>
                </div>
              </main>
            </div>
			<button type="button" className="bottombuttonslnm" id="dow" onClick={convertToPdf}>
          Download Sheet
        </button>
        <button type="button" className="bottombuttonslnm" id="save" style={{ marginLeft: '0%' }}>
          Save Sheet
        </button>
        <button
          type="button"
          className="bottombuttonslnm"
          onClick={() => window.history.back()}
          id="Home"
          style={{ marginLeft: '0%' }}
        >
          Back Home
        </button>
          </div>
        </div>
  )
}

export default LNM