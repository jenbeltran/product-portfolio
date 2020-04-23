import Groupshot from '../../images/negotiation-event.jpg';
import BubbleteaMeetup from '../../images/bubbletea-meetup.jpg';
import NegotiationEvent from '../../images/panel.jpg';
import NetworkingEvent from '../../images/networking-event.jpg';
import TTHWebsite from '../../images/tth-website.png';
import iphone from '../../images/iphone.png';
import DesignChallenge from '../../images/design-challenge.png';

const ProjectData = [
	{
		pageName         : 'project1',
		photo            : Groupshot,
		alt              : 'Group shot of a TTH event',
		headline         : 'Slack Channel - June 2019',
		details          : 'Building and fostering online relationships through Slack.',
		goal             :
			'Create, grow and maintain our Slack channel to the point where members are actively posting events in Toronto.',
		action           :
			'I went to a tech event 2-4 times a week over the course of 6 months to meet like-minded individuals and added any one I made a great connection with to a Slack channel.',
		measureOfSuccess :
			'Eventually, members invited other members and our active Slack channel grew from zero to 150 members in 6 months and 250 in 9 months.'
	},
	{
		pageName         : 'project2',
		photo            : BubbleteaMeetup,
		alt              : 'TTH members at a meetup',
		headline         : 'First Tea Meetup  - October 2019',
		details          : 'Hosted a meetup at a local bubble tea shop.',
		goal             : 'Host a meetup where members can meet in person.',
		action           :
			'One of our members introduced me to a friend who owns Bean and Pearl bubble tea shop. We co-ordinated to have the event on their slowest day of the week and our members received 15% off each drink order.',
		measureOfSuccess : 'A total of 30 members showed up at the event and 10 members stayed until the shop closed.'
	},
	{
		pageName         : 'project3',
		photo            : NegotiationEvent,
		alt              : 'Panel and guests at a TTH event',
		headline         : 'Negotiating Your Worth Event - November 2019',
		details          :
			'Co-ordinated a Women in Tech event that focused on the topic of negotiating salaries and over 60 women participated in this event.',
		goal             :
			'Host a Women in Tech event where guests have the opportunity to be mentored by a panelist and practice what they learned.',
		action           :
			'This event was a collaboration with Bitcoin Bay - Bitcoin Bay was in charge of finding sponsorship and TTH was in charge co-ordinating the event. My co-founders and I reached out to our network to recruit panelists, researched a negotation workshop actvity and co-ordinated catering. We came up with questions for the panelists and ensured that each panelist represented a diversity of tech careers and ethnicity. Additionally, we made sure to introduce the panelists to each other ahead of time prior to the event via a conference call. For the workshop activity, we planned to have each guest divided into groups of 10 where they had to take turns negotiating for a $10,000 raise in pairs with one of the panelists.',
		measureOfSuccess :
			'The event sold out in 2 days and we have been championed by one of the panelists to host our future events at Shopify.'
	},
	{
		pageName         : 'project4',
		photo            : TTHWebsite,
		alt              : 'Photo of Tech Teahouse website',
		headline         : 'Tech Teahouse Website - January 2020',
		details          : 'Worked with a team of designers and developers to create and deploy the TTH website.',
		goal             :
			'Build a website to raise awareness and for potential sponsors to learn more about our community.',
		action           :
			"I've had numerous meetings with various parties to implement this project. First, I've worked with the other co-founders to confirm our goals for the website. After our conclusion, we discussed with UX designers to come up with a simple design. The developers who coded the site had recently graduated from coding bootcamps (like myself), so I took that into consideration with the design team. Shortly after the design was completed, I worked with the developers to code and deploy the website. Based on a developer's suggestion, the website was built using GatsbyJS and Styled Components. I deployed the site using AWS S3 Bucket and Cloudfront.",
		measureOfSuccess :
			"The website was deployed within 6 weeks. As much as this is a considered a long time for a simple static website, all UX designers and developers were volunteers, thus we had accomodated meetings around everyone's schedules. The Christmas and New Year holidays interfered with our schedules as well. This project is on-going with all the updates I want to make on the site, therefore I have created a Monday board (which is our Jira board) for any tickets going forward. Since the website's first deployment, we have added an option to sign up for our Slack community, and an events calendar where anyone can see all the events that our members are attending."
	},
	{
		pageName         : 'project5',
		photo            : NetworkingEvent,
		alt              : 'Panel and guests at a TTH event',
		headline         : 'Navigating Networking Event - February 2020',
		details          :
			'Co-ordinated a Women in Tech event that focused on the topic of networking and over 80 women participated in this event.',
		goal             :
			'Host a Women in Tech event where guests have the opportunity to be mentored by a panelist and practice what they learned.',
		action           :
			'My co-founders and I recruited panelists, and decided on a workshop activity. The topic of this event was networking in social situations. We recruited a panel of diverse tech and ethnic backgrounds, provided them with a list of questions and held a conference call for them to meet ahead of time to dicuss any concerns. The workshop activity was an elevator pitch where guests are divided into 7 tables that was moderated by one of the panelists. TTH was championed by a previous panelist to have my event proposal reviewed and accepted at Shopify. I have also reached out to my network which lead to TWG sponsoring this event as well. Furthermore, I completed my SmartServe and acted as the bartender throughout the event.',
		measureOfSuccess :
			'Shopify sponsored the venue and catering, and TWG sponsored the drink refreshments. Tickets were sold out in one day, and we eventually received recognition to host an event for Toronto Blockchain Week 2020. Unfortunately, TBW2020 was cancelled due to CORVID-19.'
	},
	{
		pageName         : 'project6',
		photo            : iphone,
		alt              : 'Photo of Tech Teahouse Twitter profile',
		headline         : 'Tech Teahouse Social Media - March 2020',
		details          : 'Managed a team to drive digital engagement among TTH social platforms.',
		goal             : 'Grow our social platforms and maintain the conversation online through digital engagement.',
		action           :
			'I researched and attended numerous digital marketing webinars and reached out to everyone in my network for advice and insight. After all the research, I recruited members to help create content for our social platforms and planned all content on Monday, which is our social content calendar. Hootsuite is filled with pre-programmed content until July, in which we will analyze the data to see which type of content our users want to see.',
		measureOfSuccess :
			'This project will remain on-going and I will be constantly iterating based on our social analytics. However, TTH has gained 20 new followers on each of our platforms in the first week. Our starting numbers before this project are: Linkedin - 367 followers, Instagram - 87 followers, Twitter - 114 followers.'
	},
	{
		pageName         : 'project7',
		photo            : DesignChallenge,
		alt              : 'Poster of UX Design Challenge',
		headline         : 'UX Design Challenge - April 2020',
		details          : 'Hosted a UX design challenge for job seeking junior UX designers.',
		goal             :
			'With COVID19 and a significant number of people working on their portfolios and looking for jobs, I wanted to provide an event where attendees are given the chance to work on an actual company design challenge as they were building their portfolios.',
		action           :
			'I reached out to numerous companies in my network and TMX provided their internal UX design challenge for our attendees.  In exchange for providing their internal challenge, I created a waiver for designers that allowed TMX to use any ideas provided if they were interested in any of the submissions. For the prize, I have reached out UXR Collective to and received a free UXR Anywhere Conference ticket (worth $700 USD) to provide to the winner of this challenge. One of my co-founders reached out to her network to have a judge from Bridge School to provide feedback for all the submissions.',
		measureOfSuccess :
			'Since we only had one judge, we limited tickets to this event to 25 people.  As a result, of the 25 people, we received 11 submissions and excellent feedback to host another design challenge.'
	}
];

export default ProjectData;

const ProjectSubtitles = {
	subtitleOne   : 'Project Goal',
	subtitleTwo   : 'My Process',
	subtitleThree : 'Results'
};

export { ProjectSubtitles };
