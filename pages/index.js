import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
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
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;
