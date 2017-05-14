const pugTemplate = {
  make(name, uName, objName) {
    return `doctype html
html(lang="en")
  include base/head.pug
  // Body
  body
    include blocks/header.pug

    main#barba-wrapper.offset
      div.barba-container(data-namespace='${name}')
        h1 ${objName}

    include blocks/footer.pug
    `;
  }
}

module.exports = pugTemplate;