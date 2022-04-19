export default {
  title: 'Core/Layout',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
  parameters: {
    layout: 'centered'
  }
};

const TemplateSimple = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <div class="sample-screen">
      <div class="layout">
          <div class="layout-view no-grow">
            <div class="sample-filler fill-width">
              Content
            </div>
          </div>
      </div>
    </div>
`;
}

const TemplateCenter = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <div class="sample-screen">
      <div class="layout">
        <div class="layout-splitter horizontal fill-space">
          <div class="layout-view align-children-on-center">
            <div class="sample-filler">
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

const TemplateSidebar = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <div class="sample-screen">
      <div class="layout">
        <div class="layout-splitter horizontal fill-space">
          <div class="layout-view align-children-on-start" style="width:240px">
            <div class="fill-space sample-filler">
              Sidebar
            </div>
          </div>
          <div class="layout-view align-children-on-start" style="width:calc(100% - 240px);">
            <div class="fill-space sample-filler">
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

const TemplateComplex = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <div class="sample-screen">
      <div class="layout">
        <div class="layout-splitter vertical fill-space">
          <div class="layout-view align-children-on-start" style="height:60px">
            <div class="fill-space sample-filler">
              Topbar
            </div>
          </div>
          <div class="layout-view align-children-on-start" style="height:calc(100% - 60px);">
            <div class="layout-splitter horizontal fill-space">
              <div class="layout-view align-children-on-start" style="width:240px">
                <div class="fill-space sample-filler">
                  Sidebar
                </div>
              </div>
              <div class="layout-view align-children-on-start" style="width:calc(100% - 240px);">
                <div class="fill-space sample-filler">
                  Content
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export const Simple = TemplateSimple.bind({});
Simple.args = {
};

export const Centered = TemplateCenter.bind({});
Centered.args = {
};

export const WithSidebar = TemplateSidebar.bind({});
WithSidebar.args = {
};

export const Complex = TemplateComplex.bind({});
Complex.args = {
};

// eslint-disable-next-line no-underscore-dangle
export const __namedExportsOrder = ['Simple', 'Centered', 'WithSidebar', 'Complex'];