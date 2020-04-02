import Groupshot from '../../images/negotiation-event.jpg';
import BubbleteaMeetup from '../../images/bubbletea-meetup.jpg';
import NegotiationEvent from '../../images/panel.jpg';
import NetworkingEvent from '../../images/networking-event.jpg';
import TTHWebsite from '../../images/tth-website.png';
import iphone from '../../images/iphone.png';

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
		goal             : 'I’m passionate about bringing ideas to life and exploring ways of making things better.',
		action           :
			'I have a Full Stack Web Development certificate, a Financial Planning post-grad and a Commerce degree - all from York University.',
		measureOfSuccess : 'I’m an excellent planner and love meeting new people!'
	},
	{
		pageName         : 'project5',
		photo            : NetworkingEvent,
		alt              : 'Panel and guests at a TTH event',
		headline         : 'Navigating Networking Event - February 2020',
		details          :
			'Co-ordinated a Women in Tech event that focused on the topic of networking and over 80 women participated in this event.',
		goal             : 'I’m passionate about bringing ideas to life and exploring ways of making things better.',
		action           :
			'I have a Full Stack Web Development certificate, a Financial Planning post-grad and a Commerce degree - all from York University.',
		measureOfSuccess : 'I’m an excellent planner and love meeting new people!'
	},
	{
		pageName         : 'project6',
		photo            : iphone,
		alt              : 'Photo of Tech Teahouse Twitter profile',
		headline         : 'Tech Teahouse Social Media - March 2020',
		details          : 'Managed a team to drive digital engagement among TTH social platforms.',
		goal             : 'I’m passionate about bringing ideas to life and exploring ways of making things better.',
		action           :
			'I have a Full Stack Web Development certificate, a Financial Planning post-grad and a Commerce degree - all from York University.',
		measureOfSuccess : 'I’m an excellent planner and love meeting new people!'
	}
];

export default ProjectData;

const ProjectSubtitles = {
	subtitleOne   : 'Project Goal',
	subtitleTwo   : 'My Process',
	subtitleThree : 'Measure of Success'
};

export { ProjectSubtitles };
