import React , { useRef }from 'react';
// import domtoimage from 'dom-to-image';
import './aeiou.css';
import html2pdf from 'html2pdf.js';
// import htmlToPdf from 'html-to-pdf-converter';

const AEIOUSheet = () => {
  const sheetRef = useRef(null);

// pdf conversion
// convert in to pdf 
const convertToPdf = async () => {
  const element = sheetRef.current;
  const opt = {
    margin: 1,
    filename: 'AEIOU-Sheet.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
  };

  const pdfPromise = html2pdf().from(element).set(opt).outputPdf(); // Obtain the PDF promise

  return new Promise((resolve, reject) => {
    pdfPromise.then(pdf => {
      resolve(pdf); // Resolve the promise with the generated PDF
    }).catch(error => {
      reject(error); // Reject the promise if an error occurs
    });
  });
};

// call api to store pdf in databse 
// const handleSaveSheet = () => {
//   const element = sheetRef.current;

//   // Convert the mainsheet div portion to HTML content
//   const html = element.innerHTML;

//   // Set the email value
//   const email = 'demo@demo.com'; // Replace with the desired email value

//   // Create the request body
//   const requestBody = {
//     email: email,
//     html: html // Use 'html' instead of 'content'
//   };

//   fetch('/api/generate-pdf', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestBody)
//   })
//     .then(response => {
//       if (response.ok) {
//         window.alert('PDF generated and stored in user document');
//       } else {
//         throw new Error('Failed to generate PDF');
//       }
//     })
//     .catch(error => {
//       console.error('Error generating PDF:', error);
//     });
// };
// ---------------------- new ----------------------
const sendFileToServer = async () => {
  try {
    const pdf = await convertToPdf();
    console.log(pdf); // The generated PDF file

    const formData = new FormData();
    formData.append('file', pdf);

    fetch('http://localhost:3001/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      return response.blob(); // Convert the response to a Blob
    } else {
      throw new Error('Failed to upload');
    }
  })
  .then(blob => {
    const url = URL.createObjectURL(blob);
    // Create a link element to download the file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';
    link.click();
    URL.revokeObjectURL(url); // Release the object URL
  })
  .catch(error => {
    alert(error.message);
  });

  } catch (error) {
    console.error('Failed to convert to PDF:', error);
  }

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
			case "Environment": 
			const Environment = document.getElementById("dive").childElementCount;
			if( Environment >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
        noteText.value = '';
				return;
				}else{
				document.getElementById("place").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('dive');
				con.appendChild(newelement); 
			}
			break;
			case "Activity": 
			const Activity = document.getElementById("diva").childElementCount;
			if( Activity >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
        noteText.value = '';
				return;
				}else{
				document.getElementById("placea").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('diva');
				con.appendChild(newelement);
			} 
			break;
			case "Users": 
			const User = document.getElementById("divu").childElementCount;
			if( User >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
        noteText.value = '';
				return;
				}else{
				document.getElementById("placeu").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divu');
				con.appendChild(newelement); 
			}
			break;
			case "Interactions": 
			const Interaction = document.getElementById("divi").childElementCount;
			if( Interaction >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
        noteText.value = '';
				return;
				}else{
				document.getElementById("placei").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divi');
				con.appendChild(newelement); 
			}
			break;
			case "Objects": 
			const Objects = document.getElementById("divo").childElementCount;
			if( Objects >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
        noteText.value = '';
				return;
				}else{
				document.getElementById("placeo").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				con = document.getElementById('divo');
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
	var gid = document.getElementById("gid").value;
	var date = document.getElementById("date").value;
	var dname = document.getElementById("dname").value;
	var version = document.getElementById("version").value;
	if(gid ===  "" || gid === null || date === "" || date === null || dname === "" || dname === null ||version === "" || version === null){
		alert("Fill all fields ");
	}
	else
	{
        
		
        let d00 = document.getElementById("d00");
        let d11 = document.getElementById("d11");
        let d22 = document.getElementById("d22");
        let d33 = document.getElementById("d33");
        d00.innerText = gid;
        d11.innerText = dname;
        d22.innerText = date;
        d33.innerText = version;
	}
}

  return (
    <div className="background">
      <form action="#">
        <div className="sidebar" id="sidebar">
          <h3 className="elementtext">ELEMENTS</h3>
          <input
            type="text"
            className="inputs"
            placeholder="Group id"
            id="gid"
            minLength="1"
            maxLength="6"
            required
          />
          <input
            type="text"
            className="inputs"
            placeholder="Date"
            id="date"
            onFocus={(e) => (e.target.type = 'date')}
            required
          />
          <input
            type="text"
            className="inputs"
            placeholder="Domain Name"
            id="dname"
            minLength="1"
            maxLength="20"
            required
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
              Select portion
            </option>
            <option value="Environment">Environment</option>
            <option value="Activity">Activity</option>
            <option value="Users">Users</option>
            <option value="Interactions">Interactions</option>
            <option value="Objects">Objects</option>
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
            onClick={() => AddStikeyNotes()}
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

      <div className="col2">
        <div id="mainsheet" ref={sheetRef}>
          <div className="sheetheader">
            <div>
              <h3>
                <b>&nbsp;AEIOU Summary:</b>
              </h3>
            </div>
            <div className="group">
              <div className="id">
                Group ID : <div id="d00"></div>
              </div>
              <div className="date">
                Date :<div id="d22"></div>
              </div>
              <div className="name1" style={{ gridArea: '2/1/2/3' }}>
                Domain Name :<div id="d11"></div>
              </div>
            </div>
            <div className="version">
             Version :<div id="d33"></div>
            </div>
          </div>
          <div className="sheet">
            <div className="container1">
              <div className="borderAEIOU" id="dive">
                &nbsp; Environment:
                <div
                  className="placeh"
                  id="place"
                  contentEditable="false"
                  data-placeholder="(Style, material & atmosphere) -Floor plan,Elements,features and special notes,Scenes."
                ></div>
              </div>
              <div className="borderAEIOU" id="divi">
                &nbsp; Interactions:
                <div
                  className="placeh"
                  id="placei"
                  contentEditable="false"
                  data-placeholder="  (Who is interacting with whom, what?), -Scene of interaction (How it is being done) -Elements,features and special notes"
                ></div>
              </div>
              <div className="borderAEIOU" id="divo">
                &nbsp; Objects:
                <div
                  className="placeh"
                  id="placeo"
                  contentEditable="false"
                  data-placeholder="(What components are involved? How?) - Inventory of key objects , Elements, features and special notes  "
                ></div>
              </div>
            </div>
            <div className="container2">
              <div className="borderAEIOU" id="diva">
                &nbsp; Activities:
                <div
                  className="placeh"
                  id="placea"
                  contentEditable="false"
                  data-placeholder="- Sketch/photo Summary of activity , Elements, features and special notes"
                ></div>
              </div>
              <div className="borderAEIOU" id="divu">
                &nbsp; Users:
                <div
                  className="placeh"
                  id="placeu"
                  contentEditable="false"
                  data-placeholder=" (Who is present? Role and responsibilities) - Scene of user in context , Elements, features and special notes "
                ></div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={convertToPdf} className="bottombuttons" id="dow">
          Download Sheet
        </button>
        <button type="button" className="bottombuttons" onClick={sendFileToServer} id="save" style={{ marginLeft: '0%' }}>
          Save Sheet
        </button>
        <button
          type="button"
          className="bottombuttons"
          onClick={() => window.history.back()}
          id="Home"
          style={{ marginLeft: '0%' }}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default AEIOUSheet;
