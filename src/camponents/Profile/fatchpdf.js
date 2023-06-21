import React from 'react'

const Fatchpdf = () => {
    const handleRetrievePdf = () => {
        const userId = '64757330b86866b6d534371e'; // Replace with the actual user ID of the user whose PDF you want to retrieve
        
        fetch(`/api/get-pdf/${userId}`)
          .then(response => {
            if (response.ok) {
              return response.blob();
            } else {
              throw new Error('Failed to retrieve PDF');
            }
          })
          .then(blob => {
            // Create a temporary URL for the blob
            const url = URL.createObjectURL(blob);
            
            // Create a link element to initiate the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'AEIOU-Sheet.pdf';
            link.click();
            
            // Release the object URL
            URL.revokeObjectURL(url);
          })
          .catch(error => {
            console.error('Error retrieving PDF:', error);
          });
      };
  return (
    <div>
        <button type="button" onClick={handleRetrievePdf} className="bottombuttons" id="dow">
          Download Sheet
        </button>
    </div>
  )
}

export default Fatchpdf