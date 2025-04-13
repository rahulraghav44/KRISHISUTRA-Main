import React from 'react';

 
function Kharif() {
    const sectionStyle = {
        background: "#f8f9fa",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      };
    return ( 
        <>
        <section className="season" style={sectionStyle}>
        <h2 style={{color:"#34495e"}}>Kharif Season (Monsoon Crops)</h2>
        <p>
          Kharif crops are sown in <strong>June-July</strong> and harvested in{" "}
          <strong>September-October</strong>. They require{" "}
          <strong>warm temperatures and high humidity</strong> with abundant{" "}
          <strong>rainfall</strong>.
        </p>
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Water Requirement</th>
              <th>pH Requirement</th>
              <th>Temperature Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rice</td>
              <td>1200-2000 mm</td>
              <td>5.5-7.0</td>
              <td>20-35°C</td>
            </tr>
            <tr>
              <td>Maize</td>
              <td>500-800 mm</td>
              <td>5.8-7.5</td>
              <td>18-32°C</td>
            </tr>
            <tr>
              <td>Cotton</td>
              <td>700-1300 mm</td>
              <td>5.8-7.5</td>
              <td>21-30°C</td>
            </tr>
            <tr>
              <td>Bajra</td>
              <td>300-400 mm</td>
              <td>6.0-7.5</td>
              <td>25-35°C</td>
            </tr>
            <tr>
              <td>Soybean</td>
              <td>450-700 mm</td>
              <td>6.0-7.5</td>
              <td>20-30°C</td>
            </tr>
          </tbody>
        </table>
      </section>
        </>
     );
}

export default Kharif;