import React from 'react';
import type { EntryCollection } from "contentful";
import moment from 'moment';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { type Document } from "@contentful/rich-text-types"
import type { Trip } from "../lib/contentful.ts";

interface Props {
  trips: EntryCollection<Trip, "WITHOUT_UNRESOLVABLE_LINKS", string>,
  daysOfWeek?: number[] | null,
  historical?: boolean,
}

const TripDisplay = ({ trips, daysOfWeek, historical } : Props) =>

  trips.items.map( trip  => {
    const node = trip.fields;
    const tripDate = moment(node.tripDate);
    const title = node.title.toString();
    const terrainDifficulty = node.terrainDifficulty === undefined
      ? node.grade.toString()
      : node.terrainDifficulty.toString();
    const expectedDuration = node.expectedDuration === undefined ? '' : node.expectedDuration.toString();
    const description = node.description.nodeType === 'document' ? node.description as Document : null;
    const leaders = Array.isArray(node.leaders)
      ? node.leaders
        .filter((leader) => leader !== undefined)
        .filter(leader => "fields" in leader)
      : null;

    if ((!historical && tripDate.isBefore(moment().subtract(2, 'd'))) || (historical && tripDate.isAfter(moment()))) {
      return null;
    }

    if (daysOfWeek && ! daysOfWeek.includes(tripDate.day()))
      return null

    return (
      <article key={ title } className="card has-background-success-light is-left-text-aligned">
        <div className="card-header-title">{moment(node.tripDate).format("dddd Do MMMM YYYY")}</div>
        <div className="card-header-title">{title}</div>
         <section className="card-content">
           <table className="table is-fullwidth is-narrow is-bordered is-striped">
             <tbody>
               <tr className="is-displayed-widescreen">
                 <th style={{width:'15%'}}>Terrain Difficulty</th>
                 <td style={{width:'15%'}}>{terrainDifficulty}</td>
                 <th style={{width:'15%'}}>Expected Duration</th>
                 <td>{expectedDuration}</td>
               </tr>
               <tr className="is-displayed-desktop-only">
                 <th style={{width:'20%'}}>Terrain Difficulty</th>
                 <td style={{width:'15%'}}>{terrainDifficulty}</td>
                 <th style={{width:'20%'}}>Expected Duration</th>
                 <td>{expectedDuration}</td>
               </tr>
               <tr className="is-displayed-tablet-only">
                 <th style={{width:'25%'}}>Terrain Difficulty</th>
                 <td style={{width:'20%'}}>{terrainDifficulty}</td>
                 <th style={{width:'25%'}}>Expected Duration</th>
                 <td>{expectedDuration}</td>
               </tr>
               <tr className="is-hidden-tablet">
                 <th style={{width:'25%'}}>Terrain Difficulty</th>
                 <td style={{width:'75%'}}>{terrainDifficulty}</td>
               </tr>
               <tr className="is-hidden-tablet">
                 <th>Expected Duration</th>
                 <td>{expectedDuration}</td>
               </tr>
               <tr>
               </tr>
               {leaders && !historical &&
                 <tr>
                   <th>Leader(s)</th>
                   <td colSpan={3}>
                     {leaders.map(leader => {
                       const name = leader.fields.name.toString();
                       const phoneNumber = leader.fields.phoneNumber.toString().replace(/ /gi, ' ');
                       return (<p key={name}>{name} - Phone: {phoneNumber.replace(/-/gi, ' ')}</p>);
                     })}
                   </td>
                 </tr>
               }
               {!historical &&
               <tr>
                 <th>Departs</th>
                 <td colSpan={3}>{node.meetupDetails.toString()}</td>
               </tr>
               }
               {node.fare && !historical &&
                 <tr>
                   <th>Fare</th>
                   <td colSpan={3}>{node.fare.toString()}</td>
                 </tr>
               }
               {node.description &&
                 <tr className="is-hidden-mobile">
                   <th>Description</th>
                   <td colSpan={3}>{description ? documentToReactComponents(description) : <></>}</td>
                 </tr>
               }
             </tbody>
           </table>
           {node.description &&
             <table className="is-hidden-tablet table is-fullwidth is-narrow is-bordered is-striped">
               <tbody>
                 <tr>
                   <th>Description</th>
                 </tr>
                 <tr>
                   <td>{description ? documentToReactComponents(description) : <></>}</td>
                 </tr>
               </tbody>
             </table>
           }
         </section>
       </article>
    )
  })

export default TripDisplay;
