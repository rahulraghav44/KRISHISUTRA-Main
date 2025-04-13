import React from 'react';
function Rabi() {
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
        <h2 style={{color:"#34495e"}}>Rabi Season (Winter Crops)</h2>
        <p>
          The Rabi season starts in <strong>October-December</strong> and
          harvesting occurs between <strong>March-May</strong>. These crops
          require <strong>cool temperatures</strong> for growth and{" "}
          <strong>warmer conditions</strong> for ripening. Since this season
          occurs in dry months, <strong>irrigation is necessary</strong>.
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
              <td>Wheat</td>
              <td>450-650 mm</td>
              <td>6.0-7.5</td>
              <td>10-25°C (growth), 25-30°C (ripening)</td>
            </tr>
            <tr>
              <td>Barley</td>
              <td>350-500 mm</td>
              <td>6.0-7.5</td>
              <td>12-22°C</td>
            </tr>
            <tr>
              <td>Mustard</td>
              <td>400-500 mm</td>
              <td>6.0-7.5</td>
              <td>10-25°C</td>
            </tr>
            <tr>
              <td>Gram</td>
              <td>300-400 mm</td>
              <td>6.0-7.5</td>
              <td>10-30°C</td>
            </tr>
            <tr>
              <td>Lentils</td>
              <td>300-450 mm</td>
              <td>6.0-7.0</td>
              <td>18-28°C</td>
            </tr>
          </tbody>
        </table>
      </section>
        </>
     );
}

export default Rabi;