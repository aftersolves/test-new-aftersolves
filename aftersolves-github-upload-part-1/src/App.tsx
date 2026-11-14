import React from 'react'
import TesselAgentLanding from './components/ui/tessel-agent-landing'
import './style.css'

// Aftersolves content migrated from new-aftersolves-v2.6-system-theme.
// The interactive hero remains a visual demo, not a connected AI service.
const contact = '/original/contact.html'
const nav = [
 {label:'Solutions',items:[
  {label:'Aftersolves Booking',description:'Appointments, reservations and staff scheduling',href:'/original/booking.html'},
  {label:'Website Development',description:'Professional websites and custom applications',href:'/original/pricing.html'},
  {label:'Industries',description:'Solutions for appointment-based businesses',href:'/original/booking.html'}]},
 {label:'Pricing',href:'#pricing'},
 {label:'About',href:'/original/about.html'},
 {label:'Contact',href:contact}
]
const solution = {kicker:'What we build',title:'One partner for software and website development',features:[
 {kicker:'Booking solutions',visual:'builder' as const,title:'Booking that works around your business.',text:'Manage customer appointments, reservations, queues and staff schedules through one connected platform.',points:['Online bookings and reservations','Staff scheduling and customer management','Notifications, reminders and reporting']},
 {kicker:'Website development',visual:'tools' as const,title:'A website built for your next stage.',text:'Responsive business websites, content management and custom web applications designed for your workflow.',points:['Responsive websites and SEO foundations','Custom design, CMS and integrations','Project-based development and optional management']},
 {kicker:'Business operations',visual:'trace' as const,title:'Make everyday work easier to manage.',text:'Bring customer information, scheduling and essential business processes into a clearer workflow.',points:['Simpler appointment handling','Better visibility for your team','Practical automation opportunities']},
 {kicker:'Our process',visual:'deploy' as const,title:'From discussion to launch.',text:'We discuss your goals, plan the scope, build your solution and prepare it for launch with clear milestones.',points:['Discuss your requirements','Plan the project and milestones','Build, test and launch']}
]}
const pricing = {kicker:'Pricing in Malaysian ringgit',title:'Subscription software, quoted development',annualDiscount:0,estimator:null,plans:[
 {name:'Booking Starter',price:49,unit:'/ month',blurb:'For solo operators and small appointment-based businesses.',features:['One business profile','Up to two staff schedules','Online appointment booking','Customer management','Email booking notifications','Standard reports'],cta:{label:'Enquire about Starter',href:contact}},
 {name:'Booking Growth',price:129,unit:'/ month',blurb:'For growing businesses with more scheduling needs.',features:['Up to three branches','Reservations and queues','Unlimited staff schedules','Email and SMS reminders','Analytics and reporting','Embedding eligibility'],cta:{label:'Enquire about Growth',href:contact},featured:true},
 {name:'Custom / Enterprise',price:null,blurb:'Tailored systems, integrations and multi-branch needs.',features:['Custom web applications','Advanced booking workflows','API integrations','Tailored onboarding','Custom domain arrangements','Quoted scope and support'],cta:{label:'Request a quote',href:contact}}
]}
const footer = {tagline:'Build better. Work smarter. Grow further.',columns:[
 {title:'Solutions',links:[{label:'Booking',href:'/original/booking.html'},{label:'Website development',href:'/original/pricing.html'},{label:'Industries',href:'/original/booking.html'}]},
 {title:'Company',links:[{label:'About',href:'/original/about.html'},{label:'Projects',href:'/original/project/mory-coffee.html'},{label:'Contact',href:contact}]},
 {title:'Pricing',links:[{label:'Booking plans',href:'/original/pricing.html'},{label:'Website pricing',href:'/original/pricing.html'},{label:'Get a quote',href:contact}]},
 {title:'Legal',links:[{label:'Privacy',href:'/original/privacy.html'},{label:'Terms',href:'/original/terms.html'},{label:'Payment',href:'/original/payment.html'},{label:'Refund',href:'/original/refund.html'}]}
],note:'© 2026 Aftersolves. All rights reserved.'}
const industries = [
 ['Clinics & healthcare','clinics-and-healthcare'],['Restaurants & cafés','restaurants-and-cafes'],['Salons & barbershops','salons-and-barbershops'],['Car wash businesses','car-wash'],['Consultants & professionals','consultants-and-professionals'],['Other appointment businesses','other-appointment-businesses']
]
function MoreContent(){return <section className="after-extra" id="industries"><div className="after-wrap"><p className="after-kicker">Who we serve</p><h2>Built for appointment-based businesses.</h2><p className="after-intro">Aftersolves Booking can be configured for businesses that schedule time with customers.</p><div className="after-grid">{industries.map(([label,slug])=><a key={slug} href={'/original/industries/'+slug+'/'} className="after-tile"><span>{label}</span><span aria-hidden="true">↗</span></a>)}</div><div className="after-sites"><div><p className="after-kicker">Website development</p><h2>Websites, quoted per project.</h2><p>Starter Sites from RM 2,500 one-off. Growth Sites from RM 6,500 one-off. Custom builds are quoted individually. Ongoing monthly management is available separately.</p><a href="/original/pricing.html">See full website pricing ↗</a></div><div><p className="after-kicker">Let's talk</p><h2>Tell us what you are building.</h2><p>Share your business goals and requirements with the Aftersolves team.</p><a href={contact}>Request a quote ↗</a></div></div></div></section>}
export default function App(){return <><TesselAgentLanding brand="Aftersolves" theme="system" themeToggle palette="cobalt" currency="RM " announcement={{label:'Explore Aftersolves Booking',href:'/original/booking.html'}} nav={nav} signIn={null} getStarted={{label:'Get a quote',href:contact}} hero={{badge:{mark:'A',label:'Software & digital solutions'},title:'Build better. Work smarter.\nGrow further.',text:'Aftersolves provides booking solutions, professional website development and custom web applications for growing businesses.',primary:{label:'Get a quote',href:contact},secondary:{label:'Explore solutions',href:'#product'},prompt:{label:'Explore a sample workflow · interactive demo',placeholder:'Describe a workflow to preview...',suggestions:['Organize incoming booking requests','Plan a new business website','Draft a weekly operations report','Triage customer enquiries'],models:['Workflow demo','Planning demo','Support demo']}}} logos={null} problem={{kicker:'The challenge',title:'Too many manual tasks. *Not enough time for your customers.*',items:[{icon:'layers',title:'Disconnected operations',text:'Bookings, customer information and schedules are often spread across different tools.'},{icon:'steps',title:'Time spent on repetitive work',text:'Manual confirmations and follow-ups can take attention away from serving customers.'},{icon:'eye',title:'Unclear project progress',text:'Without defined scope and milestones, digital projects can be difficult to manage.'}]}} solution={solution} stats={[{value:2,label:'Primary offerings: Booking and Website Development'},{value:24,suffix:'/7',label:'Online booking availability'},{value:4,label:'Core project stages: Discuss, Plan, Build, Launch'},{value:6,label:'Appointment business categories supported'}]} caseStudy={null} testimonials={null} pricing={pricing} cta={null} footer={footer}/><MoreContent/></>}
