import React from 'react'
import Card from './Components/Card'
import User from './Components/User'



const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 45,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 70,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 40,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: 80,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 90,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 50,
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "4 weeks ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 75,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: 55,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "8 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: 65,
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "12 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: 48,
      location: "Hyderabad, India"
    }
  ];

  console.log(jobOpenings);
  
  return (
    <div className='parent'>
          {jobOpenings.map(function(elem){

            return <Card />
          })}
    </div>
  )
}

export default App