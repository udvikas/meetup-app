import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/a/a0/Naschmarktleipzig858.JPG"
      title="A First Meetup"
      address="some steet 5, some city"
      description="this is a first meetup!"
    ></MeetupDetail>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false, //path contains all supported meetupId values
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // fetch data for single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Naschmarktleipzig858.JPG",
        id: meetupId,
        title: "A First Meetup",
        address: "some steet 5, some city",
        description: "this is a first meetup!",
      },
    },
  };
}
export default MeetupDetails;
