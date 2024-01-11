
function renderTableOfContents(contents) {
  console.log(contents)
  let text = '';
  for (let i = 0; i < contents.length; i++) {
    text += `- [${contents[i]}](#${contents[i]})\n`;
  }
  return text;
}



function renderLicenseSection(license) {
  const makeLicenseBadgeLink = (license)
  switch (makeLicenseBadgeLink) {
    case 'No License':
      return '';
      break;
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'CC0', 'Attribution 4.0 International':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Attribution-ShareAlike 4.0 International':
      return '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)\n[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
      break;
    case 'Attribution-NonCommercial 4.0 International':
      return '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)\n[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/';
      break;
    case 'Attribution-NoDerivates 4.0 International':
      return '[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)\n[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)';
      break;
    case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
      return '[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)\n[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)';
      break;
    case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
      return '[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)\n[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)';
      break;
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'GNU GPL v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU AGPL v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU LGPL v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'GNU FDL v1.3':
      return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
      break;
    case 'Hippocratic License 2.1':
      return '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
      break;
    case 'Hippocratic License 3.0':
      return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
      break;
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'ISC License (ISC)':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Attribution License (BY)':
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
      break;
    case 'Open Database License (ODbL)':
      return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
      break;
    case 'Public Domain Dedication and License (PDDL)':
      return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
      break;
    case 'Perl License':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
      break;
    case 'Artistic License 2.0':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
      break;
    case 'SIL Open Font License 1.1':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case 'Do What the Fuck You Want to Public License':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
      break;
    case 'zlib/libpng License':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `#${data.title}\n
${renderLicenseSection(data.license)}\n
## Description\n
${data.description}\n
${data.motivation}\n
${data.why}\n
${data.solves}\n
${data.lessons}\n
## Table of Contents\n
${renderTableOfContents(data.tableOfContents)}\n
## Installation\n
${data.installation}\n
## Useage\n
${data.useage}\n
${data.screenshots}\n
## Credits\n
${data.collaborators}\n
${data.thirdParty}\n
${data.tutorials}\n
## License\n
${data.license}\n
${renderLicenseSection(data.license)}\n
## Badges\n
${data.badges}\n
## Features\n
${data.features}\n
## Contribute\n
${data.contribute}\n
## Tests\n
${data.tests}\n
## Questions\n
github.com/${data.github}\n
e-mail: ${data.email}
`;
}


module.exports = generateMarkdown;
