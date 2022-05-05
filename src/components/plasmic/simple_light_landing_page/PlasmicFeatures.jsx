// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wx6aoo7FZEXNn8vLYsSQDm
// Component: IepRjPFb7gQUFT
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Header from "../../Header" // plasmic-import: -Vb13Wx76lxLk/component
import Section from "../../Section" // plasmic-import: pJhvut2uXEQ_GY/component
import Bullet from "../../Bullet" // plasmic-import: _f77SlnS2kNwy2/component
import Button from "../../Button" // plasmic-import: jqiB88P53Q6rHE/component
import HomeCta from "../../HomeCta" // plasmic-import: ioydRJWlLSlsf/component
import Footer from "../../Footer" // plasmic-import: Z489008dJg24V/component
import { useScreenVariants as useScreenVariantskqRUdDzzQOAa } from "./PlasmicGlobalVariant__Screen" // plasmic-import: KqR-UdDzz-qOAa/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: wx6aoo7FZEXNn8vLYsSQDm/projectcss
import * as sty from "./PlasmicFeatures.module.css" // plasmic-import: IepRjPFb7gQUFT/css
import simpleProjectEVzpXvw6N4Zwbx from "./images/simpleProject.png" // plasmic-import: eVzpXvw6N4Zwbx/picture

export const PlasmicFeatures__VariantProps = new Array()

export const PlasmicFeatures__ArgProps = new Array()

function PlasmicFeatures__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskqRUdDzzQOAa(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cveYr)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__mXFqx)}
              >
                <div className={classNames(projectcss.all, sty.column__vsEdT)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___5OAdv)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iqDmI
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__euNf5
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__v7Vih
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___39DIc
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__xdOpv
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__v4FBb
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ynpUw)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__vrlZ
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__v15C
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__h6CF)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__bkRzo)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectEVzpXvw6N4Zwbx,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined,
                    }}
                  />
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__brFu7)}
              >
                <div className={classNames(projectcss.all, sty.column__bpPsJ)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__cpmWk)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectEVzpXvw6N4Zwbx,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined,
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__r9ToP)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__r40G7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5ZNSq
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uwWiX
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___8YbUb
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___93MdV
                      )}
                    />

                    <Bullet
                      className={classNames("__wab_instance", sty.bullet__qjwz)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__doThi
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__fc79R)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__xXsFk
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__bCbyg
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps,
    })

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures"
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`
  }
  return func
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,
  }
)

export default PlasmicFeatures
/* prettier-ignore-end */
