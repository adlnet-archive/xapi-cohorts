$(function() {
  var groups_s3 = [
    {
      name: 'Team Yet(i)',
      links: {
        project: 'Exploring issues related to security, scale & methods of data query.',
        contact_name: 'Margaret Roth',
        contact_email: 'margaret@yetanalytics.com'
      }
    },
    {
      name: 'Team Tiddly',
      links: {
        project: 'Explore potential of TiddlyWiki as an open-source tool for online & offline personal learning by implementing xAPI functionality (communicate w/an LRS).',
        contact_name: 'Ed Dixon',
        contact_email: 'eddixonnm@gmail.com',
        community: 'https://plus.google.com/u/0/communities/113063293590109148292'
      }
    },
    {
      name: 'Team Wink',
      links: {
        project: 'Create/design an informal learning experience and use the Experience API to report the learning experience information between platforms in a corporate environment.',
        contact_name: 'Dan Sirucek',
        contact_email: 'dan.sirucek@anthem.com',
        community: 'https://plus.google.com/u/0/communities/117450161228630296076'
      }
    },
    {
      name: 'Across X',
      links: {
        project: 'Implementing xAPI in several educational technologies (<a href="http://bit.ly/1Lj2deP" target="_blank">http://bit.ly/1Lj2deP</a>).',
        contact_name: 'Jessie Chuang',
        contact_email: 'jessie@classroomaid.org',
        link_ex: 'https://drive.google.com/open?id=13L6T3b955qDWKx6c0E4obgmHSO3jBAdYIYhKsdPPR9A&authuser=0',
        link_ex_title: 'Presentation'
      }
    },
    {
      name: 'Def(initely) Jux(topia)',
      links: {
        project: 'Augmented Reality (AR) + xAPI bounty. ',
        contact_name: 'Jayfus Doswell',
        contact_email: 'jayfus@juxtopia.com',
        community: 'https://plus.google.com/u/0/communities/116028734278475569453',
        link_ex: 'http://www.juxtopia.org/programs/xapi-ar-program/',
        link_ex_title: 'Website'
      }
    },
    {
      name: 'Cooperative Learning',
      links: {
        project: 'Track learning experience data for a rural electrical cooperative onboarding program.',
        contact_name: 'Cheryl Johnson',
        contact_email: 'cherstinane@gmail.com'
      }
    },
    {
      name: 'Magic Eight Ball',
      links: {
        project: 'Simulations + xAPI',
        contact_name: 'Scott Beck',
        contact_email: 'sbeck@ecsorl.com',
        community: 'https://plus.google.com/u/0/communities/101805000215288063825'
      }
    },
    {
      name: 'xAPI Gnome',
      links: {
        project: 'New hire case study using IoT. There may or may not be fish handling.',
        contact_name: 'Meg Fairchild',
        contact_email: 'mfairchild@torrancelearning.com',
        community: 'https://plus.google.com/u/0/communities/108712635287305145214'
      }
    },
    {
      name: 'Instancy',
      links: {
        project: 'Unknown. Currently exploring options for gamification and xAPI.',
        contact_name: 'Harvey Singh',
        contact_email: 'hsingh@instancy.com'
      }
    },
    {
      name: 'The GAP Minders',
      links: {
        project: 'Currently evaluating options, but leaning towards learning analytics. ',
        contact_name: 'Monique Head',
        contact_email: 'moniquehead@gmail.com',
        community: 'https://plus.google.com/u/0/communities/112186038364722973744'
      }
    },
    {
      name: 'xAP-Arrr',
      links: {
        project: 'Currently evaluating options.',
        contact_name: 'Anthony Altieri',
        contact_email: 'altierian@gmail.com',
        link_ex: 'https://drive.google.com/open?id=0Bytg_t3RXhL3T3JMeHZlaXJzSzg&authuser=0',
        link_ex_title: 'Work Product'
      }
    },
    {
      name: 'Digital Citizens',
      links: {
        project: 'Use xAPI to embed code in the following activities: Crawlers for relevant transmedia content, Surveys, play a game called Pin-A-Pirate w/3D WebGL stereoscopic scenes for 3D Viewers, dashboards, open badges and reports including sentiment analysis.',
        contact_name: 'Sandy Masin',
        contact_email: 'sandymasin@techty.com',
        community: 'https://plus.google.com/u/0/communities/114517811515662776461'
      }
    },
    {
      name: 'Babelfish',
      links: {
        project: 'Create a framework for describing relationships between verbs (e.g., XML schema or JSON data model for use by authoring applications, LRSes or analytics systems).',
        contact_name: 'Adity Gandhi',
        contact_email: 'gandhia@us.ibm.com',
        community: 'https://plus.google.com/u/0/communities/103484610822586921238'
      }
    },
    {
      name: 'Data Trippers',
      links: {
        project: 'Configure the ePub3 and its embedded widgets to receive real time feedback communications from the LRS. A dashboard widget within the ePUB3 will provide the learner valuable feedback supporting gamification, coaching, and just in time feedback scenarios.',
        contact_name: 'John Costa',
        contact_email: 'jbcosta@repubit.com',
        community: 'https://plus.google.com/u/0/communities/114517811515662776461'
      }
    },
    {
      name: 'Team DCDC',
      links: {
        project: 'Use xAPI as part of an <a href="https://docs.google.com/document/d/1Qndwp8xw1of2RNgcXJbdxxpwGx26UFDUHSr78F1jRN8/edit?usp=sharing" target="_blank">undergraduate learning technology survey course</a>.',
        contact_name: 'Jonathan Kevan',
        contact_email: 'jkevan@hawaii.edu',
        link_ex: 'https://docs.google.com/document/d/1Qndwp8xw1of2RNgcXJbdxxpwGx26UFDUHSr78F1jRN8/edit?usp=sharing',
        link_ex_title: 'Explanation'
      }
    }
  ];

  var groups_s2 = [
    {
      name: 'xAPI Proxy',
      links: {
        linkedin: 'https://www.linkedin.com/groups/ADLNET-xAPI-Proxy-Team-6631418/about',
        link_ex: 'http://www.adlnet.gov/wp-content/uploads/2014/07/Team-xAPI-Proxy.pdf',
        link_ex_title: 'xAPI BootCamp preso'
      }
    },
    {
      name: 'ImbuElearning-IEEE/ADB',
      links: {
        community: 'https://plus.google.com/u/0/communities/117580861960988129393'
      }
    },
    {
      name: 'xAPI Profilers',
      links: {
        community: 'https://plus.google.com/u/0/communities/106252033858644801319',
        link_ex: 'https://docs.google.com/a/adlnet.gov/presentation/d/1NqQHkuFf6hW7rQYn5fFRw4wA3f3QGt2FtoM96afOrYU/edit',
        link_ex_title: 'Breifing'
      }
    },
    {
      name: 'Team Sweep'
    },
    {
      name: 'Instancy'
    },
    {
      name: 'Team YouTube'
    },
    {
      name: 'Experience Badgers'
    }
  ];

  var groups_s1 = [
    {
      name: 'ImbuE-S4C'
    },
    {
      name: 'World of xAPICraft',
      links: {
        link_gh: 'https://github.com/adlnet/xapi_design_world_of_xapicraft'
      }
    },
    {
      name: 'Magical Muppets',
      links: {
        link_ex: 'https://drive.google.com/open?id=0B7Cy_QOGO8g-dFRmd3MwMkVyOU0&authuser=0',
        link_ex_title: 'Work Product'
      }
    },
    {
      name: 'Team Altair'
    },
    {
      name: 'Hugo Libre',
      links: {
        link_gh: 'https://github.com/Vitzkrieg/xapimozweblit/',
        link_ex: 'http://hugolibre.vitzkrieg.net/',
        link_ex_title: 'Website'
      }
    },
    {
      name: 'Joint Venture Group',
      links: {
        link_gh: 'https://github.com/adlnet/Joint-Venture',
        link_ex: 'https://prezi.com/qkue-fsoagi5/xapi-meets-twitter/',
        link_ex_title: 'Prezi'
      }
    }
  ];

  // Get the HTML from the template in the script tag​
  var groupScript = $('#group-list-template').html(); 

  // Compile the template​
  var groupTemplate = Handlebars.compile(groupScript);

  $('#season-3-teams').append(groupTemplate(groups_s3));
  $('#season-2-teams').append(groupTemplate(groups_s2));
  $('#season-1-teams').append(groupTemplate(groups_s1));
});
