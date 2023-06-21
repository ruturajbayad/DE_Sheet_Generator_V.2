import React , { useRef }from 'react';
import html2pdf from 'html2pdf.js';
import './bmc.css';

const BMC = () => {
    const sheetRef = useRef(null);
    // convert in to pdf 
  const convertToPdf = () => {
    const element = sheetRef.current;
    const opt = {
      margin: 1,
      filename: 'BMC.pdf',
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
			case "Key Partners": 
			const KeyPartners = document.getElementById("divKeyP").childElementCount;
			if( KeyPartners >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyP").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyP');
				con.appendChild(newelement); 
			}
			break;
			case "Key Activities": 
			const KeyActivities = document.getElementById("divKeyA").childElementCount;
			if( KeyActivities >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyA").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyA');
				con.appendChild(newelement);
			} 
			break;
			case "Value Propositions": 
			const ValuePropositions = document.getElementById("divValP").childElementCount;
			if( ValuePropositions >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeValP").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divValP');
				con.appendChild(newelement); 
			}
			break;
			case "Customer Relationships": 
			const CustomerRelationships = document.getElementById("divCustR").childElementCount;
			if( CustomerRelationships >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCustR").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCustR');
				con.appendChild(newelement); 
			}
			break;
			case "Customer Segments": 
			const CustomerSegments = document.getElementById("divCustS").childElementCount;
			if( CustomerSegments >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCustS").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCustS');
				con.appendChild(newelement); 
			}
			break;
            case "Key Resources": 
			const KeyResources = document.getElementById("divKeyR").childElementCount;
			if( KeyResources >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyR").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyR');
				con.appendChild(newelement); 
			}
			break;
            case "Channels": 
			const Channels = document.getElementById("divC").childElementCount;
			if( Channels >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeC").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divC');
				con.appendChild(newelement); 
			}
			break;
            case "Cost Structure": 
			const CostStructure = document.getElementById("divCostS").childElementCount;
			if( CostStructure >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCostS").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCostS');
				con.appendChild(newelement); 
			}
			break;
            case "Revenue Stream": 
			const RevenueStream = document.getElementById("divRevS").childElementCount;
			if( RevenueStream >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeRevS").innerText = " ";
				newelement.className = 'boxbmc';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divRevS');
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
    var defor = document.getElementById("defor").value;
    var date = document.getElementById("date").value;
    var deby = document.getElementById("deby").value;
    var version = document.getElementById("version").value;
    if(defor == "" || defor == null || date == "" || date == null || deby == "" || deby == null ||version == "" || version == null){
            alert("Fill all fields ");
    }
    else
    {
    
    let d00 = document.getElementById("d00bmc");
    let d11 = document.getElementById("d11bmc");
    let d22 = document.getElementById("d22bmc");
    let d33 = document.getElementById("d33bmc");
    d00.innerText = defor;
    d11.innerText = deby;
    d22.innerText = date;
    d33.innerText = version;
    }
}
  return (
    <div className="backgroundbmc">
        <form action="#">
          <div className="sidebar" id="sidebar">
            <h3 className="elementtext">ELEMENTS</h3>
            <input
              type="text"
              className="inputs"
              placeholder="Design For"
              id="defor"
              minLength="1"
              maxLength="20"
              required
            />
            <input
              type="text"
              className="inputs"
              placeholder="Design By"
              id="deby"
              minLength="1"
              maxLength="20"
              required
            />
            <input
              type="text"
              className="inputs"
              placeholder="Date"
              id="date"
              onFocus={(e) => (e.target.type = 'date')} required
            />
            <input
              type="text"
              className="inputs"
              placeholder="Version"
              id="version"
              minLength="1"
              maxLength="4"
              required
            />
            <button
              type="button"
              value="Add"
              className="sidebutton"
              id="setb"
              onClick={setheader}
            >
              Set
            </button>
            <select name="element" className="inputs" id="portion">
              <option value="Select" selected>
                Select Portion
              </option>
              <option value="Key Partners">Key Partners</option>
              <option value="Key Activities">Key Activities</option>
              <option value="Value Propositions">Value Propositions</option>
              <option value="Customer Relationships">Customer Relationships</option>
              <option value="Customer Segments">Customer Segments</option>
              <option value="Key Resources">Key Resources</option>
              <option value="Channels">Channels</option>
              <option value="Cost Structure">Cost Structure</option>
              <option value="Revenue Stream">Revenue Stream</option>
            </select>
            <input
              type="text"
              className="inputs inpu"
              placeholder="Element name"
              id="value"
              minLength="1"
              maxLength="100"
              required
            />
            <div id="inputs1"></div>
            <button
              type="button"
              value="Add"
              className="sidebutton"
              onClick={AddStikeyNotes}
              id="btn1"
            >
              Add
            </button>
            <button
              type="button"
              value="Reset"
              className="sidebutton"
              onClick={() => window.location.reload()}
              id="btn2"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="col2bmc">
          <div id="mainsheetbmc" ref={sheetRef}>
            <div className="sheetheaderbmc">
              <div className="Titlebmc">
                <b>&nbsp;The Business Model Canvas</b>
              </div>
              <div className="DFor">
                Design For : <div id="d00bmc"></div>
              </div>
              <div className="DBy">
                Design By :<div id="d11bmc"></div>
              </div>
              <div className="date">
                Date :<div id="d22bmc"></div>
              </div>
              <div className="version">
                Version :<div id="d33bmc"></div>
              </div>
            </div>
            <div className="sheetbmc">
              <div className="box1bmc borderbmc" id="divKeyP">
                &nbsp;Key Partners
                <div
                  className="placeh"
                  id="placeKeyP"
                  contentEditable="false"
                  data-placeholder="-Who are our Key Partners? -Who are our key suppliers? -Which Key Resources are we acquiring from partners? -Which Key Activities do partners perform?"
                ></div>
              </div>
              <div className="box3bmc borderbmc" id="divValP">
          &nbsp; Value Propositions
          <div
            className="placeh"
            id="placeValP"
            contentEditable="false"
            data-placeholder="-What value do we deliver to the customer? -Which one of our customer’s problems are we helping to solve? -What bundles of products and services are we offering to each Customer Segment? -Which customer needs are we satisfying?"
          ></div>
          {/* <i class="fa-solid fa-gift"></i> */}
        </div>
        <div className="box2bmc borderbmc" id="divKeyA">
          &nbsp;Key Activities
          <div
            className="placeh"
            id="placeKeyA"
            contentEditable="false"
            data-placeholder="What Key Activities do our Value Propositions require? -Our Distribution Channels? -Customer Relationships? -Revenue streams?"
          ></div>
          {/* <i class="fa-solid fa-square-check"></i> */}
        </div>
        <div className="box4bmc borderbmc" id="divCustR">
          &nbsp;Customer Relationships
          <div
            className="placeh"
            id="placeCustR"
            contentEditable="false"
            data-placeholder="-What type of relationship does each of our Customer Segments expect us to establish and maintain with them? -Which ones have we established? -How are they integrated with the rest of our business model? -How costly are they?"
          ></div>
          {/* <i class="fa-solid fa-heart"></i> */}
        </div>
        <div className="box5bmc borderbmc" id="divCustS">
          &nbsp;Customer Segments
          <div
            className="placeh"
            id="placeCustS"
            contentEditable="false"
            data-placeholder="-For whom are we creating value? -Who are our most important customers?"
          ></div>
        </div>
        <div className="box6bmc borderbmc" id="divKeyR">
          &nbsp;Key Resources
          <div
            className="placeh"
            id="placeKeyR"
            contentEditable="false"
            data-placeholder="-What Key Resources do our Value Propositions require? -Our Distribution Channels? Customer Relationships? -Revenue Streams?"
          ></div>
        </div>
        <div className="box7bmc borderbmc" id="divC">
          &nbsp;Channels
          <div
            className="placeh"
            id="placeC"
            contentEditable="false"
            data-placeholder="-Through which Channels do our Customer Segments want to be reached? -How are we reaching them now? -How are our Channels integrated? -Which ones work best? -Which ones are most cost-efficient? -How are we integrating them with customer routines?"
          ></div>
          {/* <i class="fa-solid fa-truck"></i> */}
        </div>
        <div className="box8bmc borderbmc" id="divCostS">
          &nbsp;Cost Structure
          <div
            className="placeh"
            id="placeCostS"
            contentEditable="false"
            data-placeholder="-What are the most important costs inherent in our business model? -Which Key Resources are most expensive? -Which Key Activities are most expensive?"
          ></div>
          {/* <i class="fa-solid fa-tags fa-flip-horizontal"></i> */}
        </div>
        <div className="box9bmc borderbmc" id="divRevS">
          &nbsp;Revenue Stream
          <div
            className="placeh"
            id="placeRevS"
            contentEditable="false"
            data-placeholder="-For what value are our customers really willing to pay? -For what do they currently pay? -How are they currently paying? -How would they prefer to pay? -How much does each Revenue Stream contribute to overall revenues?"
          ></div>
          {/* <i class="fa-solid fa-sack-dollar"></i> */}
        </div>
            </div>
          </div>
          <button type="button" className="bottombuttonsbmc" id="dow" onClick={convertToPdf}>
            Download Sheet
          </button>
          <button type="button" className="bottombuttonsbmc" id="save">
            Save Sheet
          </button>
          <button
            type="button"
            className="bottombuttonsbmc"
            onClick={() => window.history.back()}
            id="Home"
          >
            Back Home
          </button>
        </div>
      </div>
  )
}

export default BMC