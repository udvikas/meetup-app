// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Naschmarktleipzig858.JPG",
    address: "some address 5, 12345 some city",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Naschmarktleipzig858.JPG",
    address: "some address 10, 12345 some city",
    description: "this is second meetup!",
  },
];

function HomePage(props) {
  // const [loadedMeetup, setLoadedMeetup] = useState([]);

  // useEffect(() => {
  //   // set a http request and fetch data.
  //   setLoadedMeetup(DUMMY_MEETUPS)
  // }, []);

  return (
      <MeetupList meetups={props.meetups} />
  );

}
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate:1 // this page regularly updated after redeployment.
//   };

// }
export default HomePage;
