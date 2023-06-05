const TuliaEditor = require('TuliaEditor');

TuliaEditor.trans('en', 'Tulia/Lawyer', {
    'pullUp': 'Pull up',
    'pullUpHelp': 'Pulls up the block, and allows to overlay the homepage hero/banner.',
    'linkFeaturesHelp': 'Link - leave empty to not create link for this element.',
});
TuliaEditor.trans('pl', 'Tulia/Lawyer', {
    'pullUp': 'Podciągnij do góry',
    'pullUpHelp': 'Podciąga blok do góry, umożliwiając przykrycie banera na stronie głównej.',
    'Here will be rendered form.': 'Tutaj pokaże się formularz.',
    'Form': 'Formularz',
});

TuliaEditor.config.set('elements.style.spacers.max', 10);

TuliaEditor.block(require('./About/About.js').default);
TuliaEditor.block(require('./CompanyInNumbers/CompanyInNumbers.js').default);
TuliaEditor.block(require('./Introduction/Introduction.js').default);
TuliaEditor.block(require('./CompanyHistory/CompanyHistory.js').default);
TuliaEditor.block(require('./Faq/Faq.js').default);
TuliaEditor.block(require('./Features/Features.js').default);
TuliaEditor.block(require('./Parallax/Parallax.js').default);
TuliaEditor.block(require('./People/People.js').default);
TuliaEditor.block(require('./FeaturesCompacted/FeaturesCompacted.js').default);
TuliaEditor.block(require('./Title/Title.js').default);
TuliaEditor.block(require('./Text/Text.js').default);
TuliaEditor.block(require('./ContactDetails/ContactDetails.js').default);
