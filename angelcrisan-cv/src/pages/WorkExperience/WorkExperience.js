import React from 'react';
import './WorkExperience.css'

export class WorkPage extends React.Component {
    render() {
        return(
            <div class="work-section">
                
                <thead>
                    <tr>
                    <th> Duration </th>
                    <th> Ocupation </th>
                    <th> Company </th>
                    <th> Location </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> July 2015 - October 2015 </td>
                        <td> Driver </td>
                        <td> La Tina Bistro </td>
                        <td> Cluj-Napoca </td>
                    </tr>
                    <tr>

                        <td> November 2015 - June 2017 </td>
                        <td> Cashier </td>
                        <td> Monaco Casino </td>
                        <td> Cluj-Napoca </td>
                    </tr>
                    <tr>
                        <td> August 2017 - February 2020 </td>
                        <td> Driver </td>
                        <td> Antica Pizza </td>
                        <td> Cluj-Napoca </td>
                    </tr>
                    <tr>
                        <td> September 2020 - NOW </td>
                        <td> Driver </td>
                        <td> TAZZ by eMag </td>
                        <td> Cluj-Napoca </td>
                    </tr>
                    <tr>
                        <td> October 2017 - NOW </td>
                        <td> Referee </td>
                        <td> Romanian Basketball Federation</td>
                        <td> Romania </td>

                    </tr>
                </tbody>

                
            </div>
        )
    }
}