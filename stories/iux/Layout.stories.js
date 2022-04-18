export default {
  title: 'IUX/Layout',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
  parameters: {
    layout: 'centered',
  },
};

const TemplateSimple = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return `
    <div class="sample-screen">
      <div class="layout">
          <div class="layout-view no-grow">
            <div class="panel fill-width">
              <div>
                <p>Parágrafo, Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec id massa interdum, venenatis orci eu, consequat est.
                Cras viverra viverra viverra.</p>
              </div>
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
            <div class="panel">
              <div>
                Conteúdo
              </div>
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
          <div class="layout-view align-children-on-start" style="width:100px">
            <div class="fill-space panel">
              <div>
                Barra Lateral
              </div>
            </div>
          </div>
          <div class="layout-view align-children-on-start" style="width:calc(100% - 100px);">
            <div class="fill-space panel">
              <div>
                Conteúdo
              </div>
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
            <div class="fill-space panel">
              <div>
                Cabeçalho
              </div>
            </div>
          </div>
          <div class="layout-view align-children-on-start" style="height:calc(100% - 60px);">
            <div class="layout-splitter horizontal fill-space">
              <div class="layout-view align-children-on-start" style="width:100px">
                <div class="fill-space panel">
                  <div>
                    Barra Lateral
                  </div>
                </div>
              </div>
              <div class="layout-view align-children-on-start" style="width:calc(100% - 100px);">
                <div class="fill-space panel">
                  <div>
                    Conteúdo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export const Simples = TemplateSimple.bind({});
Simples.args = {
};

export const Centralizado = TemplateCenter.bind({});
Centralizado.args = {
};

export const BarraLateral = TemplateSidebar.bind({});
BarraLateral.args = {
};

export const Complexo = TemplateComplex.bind({});
Complexo.args = {
};