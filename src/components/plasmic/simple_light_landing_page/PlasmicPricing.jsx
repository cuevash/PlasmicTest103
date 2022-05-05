// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wx6aoo7FZEXNn8vLYsSQDm
// Component: YGy-oxiL0BVSL6
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
import Plan from "../../Plan" // plasmic-import: ZUD5-L-XqHsPV0/component
import Bullet from "../../Bullet" // plasmic-import: _f77SlnS2kNwy2/component
import Button from "../../Button" // plasmic-import: jqiB88P53Q6rHE/component
import Faq from "../../Faq" // plasmic-import: UOgKLTtsvBIkA7/component
import Footer from "../../Footer" // plasmic-import: Z489008dJg24V/component
import { useScreenVariants as useScreenVariantskqRUdDzzQOAa } from "./PlasmicGlobalVariant__Screen" // plasmic-import: KqR-UdDzz-qOAa/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: wx6aoo7FZEXNn8vLYsSQDm/projectcss
import * as sty from "./PlasmicPricing.module.css" // plasmic-import: YGy-oxiL0BVSL6/css

export const PlasmicPricing__VariantProps = new Array()

export const PlasmicPricing__ArgProps = new Array()

function PlasmicPricing__RenderFunc(props) {
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
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Pricing"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__bQt0B)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__efhC)}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__j8FvC
                      )}
                    >
                      {"$10"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__wKS)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column__oh07P)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan___2M0Xm)}
                  description={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nFEww)}
                    >
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___4RUvB
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___9VtxT
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___1YLx
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__qxKi6
                        )}
                      />
                    </p.Stack>
                  }
                  name={"Team"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uKqXy
                      )}
                    >
                      {"$49"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__kk6Xb)}
                    color={"blue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column__kvgLz)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan___6WHg7)}
                  name={"Enterprise"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bycCc
                      )}
                    >
                      {"$200"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__vZtpB)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            className={classNames("__wab_instance", sty.faqSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"FAQ"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___0NZYb)}
            >
              <Faq
                className={classNames("__wab_instance", sty.faq__bbu)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Are there long-term contracts?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__c5MYx)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Can I add or remove licenses?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__mBjVx)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>
            </p.Stack>
          </Section>

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
  root: ["root", "header", "pricingSection", "columns", "faqSection", "footer"],
  header: ["header"],
  pricingSection: ["pricingSection", "columns"],
  columns: ["columns"],
  faqSection: ["faqSection"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps,
    })

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing"
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`
  }
  return func
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pricingSection: makeNodeComponent("pricingSection"),
    columns: makeNodeComponent("columns"),
    faqSection: makeNodeComponent("faqSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps,
  }
)

export default PlasmicPricing
/* prettier-ignore-end */