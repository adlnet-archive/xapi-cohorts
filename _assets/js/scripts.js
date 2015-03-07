$(function() {
  var groups_s3 = [
    {
      name: 'Team Yet(i)'
    },
    {
      name: 'Team Tiddly',
      links: {
        community: 'https://plus.google.com/u/0/communities/113063293590109148292'
      }
    },
    {
      name: 'Team Wink',
      links: {
        community: 'https://plus.google.com/u/0/communities/117450161228630296076'
      }
    },
    {
      name: 'Across X',
      links: {
        link_ex: 'https://drive.google.com/open?id=13L6T3b955qDWKx6c0E4obgmHSO3jBAdYIYhKsdPPR9A&authuser=0',
        link_ex_title: 'Presentation'
      }
    },
    {
      name: 'Def(initely) Jux(topia)',
      links: {
        community: 'https://plus.google.com/u/0/communities/116028734278475569453',
        link_ex: 'http://www.juxtopia.org/programs/xapi-ar-program/',
        link_ex_title: 'Website'
      }
    },
    {
      name: 'Cooperative Learning'
    },
    {
      name: 'Magic Eight Ball',
      links: {
        community: 'https://plus.google.com/u/0/communities/101805000215288063825'
      }
    },
    {
      name: 'xAPI Gnome',
      links: {
        community: 'https://plus.google.com/u/0/communities/108712635287305145214'
      }
    },
    {
      name: 'The GAP Minders',
      links: {
        community: 'https://plus.google.com/u/0/communities/112186038364722973744'
      }
    },
    {
      name: 'xAP-Arrr',
      links: {
        link_ex: 'https://drive.google.com/open?id=0Bytg_t3RXhL3T3JMeHZlaXJzSzg&authuser=0',
        link_ex_title: 'Work Product'
      }
    },
    {
      name: 'Digital Citizens',
      links: {
        community: 'https://plus.google.com/u/0/communities/114517811515662776461'
      }
    },
    {
      name: 'Babel Fish',
      links: {
        community: 'https://plus.google.com/u/0/communities/103484610822586921238'
      }
    },
    {
      name: 'Data Trippers',
      links: {
        community: 'https://plus.google.com/u/0/communities/114517811515662776461'
      }
    },
    {
      name: 'Team DCDC',
      links: {
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
