import React , { useRef }from 'react';
import html2pdf from 'html2pdf.js';
import './emc.css'

const EMC = () => {
    const sheetRef = useRef(null);
    // convert in to pdf 
  const convertToPdf = () => {
    const element = sheetRef.current;
    const opt = {
      margin: 1,
      filename: 'EMC.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };
// add notes 
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
                case "USER": 
                const USER = document.getElementById("divU").childElementCount;
                if( USER >= 10)
                {
                    alert("You can't add more than 9 Sticky Notes");
                    poerion1.value = "Select";
                    return;
                    }else{
                    document.getElementById("placeu").innerText = " ";
                    newelement.className = 'boxemc';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    newelement.style.padding="7px 5px 0px 5px";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('divU');
                    con.appendChild(newelement); 
                }
                break;
                case "STAKEHOLDERS": 
                const STAKEHOLDERS = document.getElementById("divS").childElementCount;
                if( STAKEHOLDERS >= 10)
                {
                    alert("You can't add more than 9 Sticky Notes");
                    poerion1.value = "Select";
                    return;
                    }else{
                    document.getElementById("places").innerText = " ";
                    newelement.className = 'boxemc';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    newelement.style.padding="7px 5px 0px 5px";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    con = document.getElementById('divS');
                    con.appendChild(newelement);
                } 
                break;
                case "ACTIVITIES": 
                const ACTIVITIES = document.getElementById("divA").childElementCount;
                if( ACTIVITIES >= 10)
                {
                    alert("You can't add more than 9 Sticky Notes");
                    poerion1.value = "Select";
                    return;
                    }else{
                    document.getElementById("placea").innerText = " ";
                    newelement.className = 'boxemc';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    newelement.style.padding="7px 5px 0px 5px";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    con = document.getElementById('divA');
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
        if(defor === "" || defor === null || date === "" || date === null || deby === "" || deby === null ||version === "" || version === null){
                alert("Fill all fields ");
        }
        else
        {
        
        let d00 = document.getElementById("d00emc");
        let d11 = document.getElementById("d11emc");
        let d22 = document.getElementById("d22emc");
        let d33 = document.getElementById("d33emc");
        d00.innerText = defor;
        d11.innerText = deby;
        d22.innerText = date;
        d33.innerText = version;
        }
    }




  return (
    <div>
        <div className="backgroundemc">
          {/* sidebar */}
          <form action="#">
            <div className="sidebar" id="sidebar">
              <h3 className="elementtext">ELEMENTS</h3>
              <input type="text" className="inputs" placeholder="Design For" id="defor" minLength="1" maxLength="20" required />
              <input type="text" className="inputs" placeholder="Design By" id="deby" minLength="1" maxLength="20" required />
              <input type="text" className="inputs" placeholder="Date" id="date" onFocus={(e) => (e.target.type = 'date')} required />
              <input type="text" className="inputs" placeholder="Version" id="version" minLength="1" maxLength="4" required />
              <button type="button" value="Add" className="sidebutton" id="setb" onClick={setheader}>Set</button>
              <select name="element" className="inputs" id="portion">
                <option value="Select" selected>Select Portion</option>
                <option value="USER">USER</option>
                <option value="STAKEHOLDERS">STAKEHOLDERS</option>
                <option value="ACTIVITIES">ACTIVITIES</option>
              </select>
              {/* <input type="number" minLength="1" maxLength="1"  placeholder="Enter numbers of elements(1 to 9)" className="inputs" id="number" required/> */}
              <input type="text" className="inputs inpu" placeholder="Element name" id="value" minLength="1" maxLength="100" required />
              <div id="inputs1"></div>
              <button type="button" value="Add" className="sidebutton" onClick={AddStikeyNotes} id="btn1">Add</button>
              <button type="button" value="Reset" className="sidebutton" onClick={() => window.location.reload()} id="btn2">Reset</button>
            </div>
          </form>

          {/* Page Content */}
          <div className="col2emc">
            {/* mainsheet */}
            <div id="mainsheetemc" ref={sheetRef}>
              {/* sheetheader */}
              <div className="sheetheaderemc">
                <div className="DFor">Design For <div id="d00emc"></div></div>
                <div className="DBy">Design By <div id="d11emc"></div></div>
                <div className="dateemc">Date <div id="d22emc"></div></div>
                <div className="versionemc">Version <div id="d33emc"></div></div>
              </div>
              <div className="sheetemc">
                <div className="container1emc">
                  <div className="borderemc item1" id="divU"><b>USER</b>
                    <div className="placeh" id="placeu" contentEditable="false" data-placeholder=" (Who is present? Role and responsibilities) - Scene of user in context , Elements, features and special notes "></div>
                  </div>
                  <div className="borderemc item2" id="divS"><b>STAKEHOLDERS</b>
                    <div className="placeh" id="places" contentEditable="false" data-placeholder=" (Who is present? Role and responsibilities) - Scene of user in context , Elements, features and special notes "></div>
                  </div>
                </div>
                <div className="container2ecm">
                  <div className="borderemc item3" id="divA"><b>ACTIVITIES</b>
                    <div className="placeh" id="placea" contentEditable="false" data-placeholder="  - Sketch/photo Summary of activity , Elements, features and special notes"></div>
                  </div>
                </div>
                <div className="container3emc borderemc">
                  <div className="item item4" ><b>STORY BOARDING</b>
                    <br />
                    <div className="item5emc" >HAPPY</div>
                    <textarea id="hp1" rows="2"></textarea>
                  </div>
                </div>
                <div className="container4ecm borderemc">
                  <div className="item">
                    <div className="item6emc" >HAPPY</div>
                    <textarea id="hp2" rows="2" ></textarea>
                  </div>
                </div>
                <div className="container5ecm borderemc">
                  <div className="item">
                    <div className="item7emc" >SAD</div>
                    <textarea id="sd1" rows="2"></textarea>
                  </div>
                </div>
                <div className="container6emc borderemc">
                  <div className="item">
                    <div className="item8emc" >SAD</div>
                    <textarea id="sd2" rows="2"></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* button section */}
            <button type="button" className="bottombuttonsemc" id="dow" onClick={convertToPdf}>Download Sheet</button>
            <button type="button" className="bottombuttonsemc" id="save">Save Sheet</button>
            <button type="button" className="bottombuttonsemc" onClick={() => window.history.back()} id="Home">Back Home</button>
          </div>
        </div>
      </div>
  )
}

export default EMC