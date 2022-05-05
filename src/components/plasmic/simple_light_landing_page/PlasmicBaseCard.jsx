// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wx6aoo7FZEXNn8vLYsSQDm
// Component: _bN4lfvrgdh9vg
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: wx6aoo7FZEXNn8vLYsSQDm/projectcss
import * as sty from "./PlasmicBaseCard.module.css" // plasmic-import: _bN4lfvrgdh9vg/css

export const PlasmicBaseCard__VariantProps = new Array("long")

export const PlasmicBaseCard__ArgProps = new Array("children", "iconBack")

function PlasmicBaseCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const $props = props.args
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootlong]: hasVariant(variants, "long", "long") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__km3Vw, {
          [sty.freeBoxlong__km3VWkh2Tj]: hasVariant(variants, "long", "long"),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenlong]: hasVariant(variants, "long", "long"),
          }),
        })}
      </div>

      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__hxZhp, {
            [sty.freeBoxlong__hxZhpkh2Tj]: hasVariant(variants, "long", "long"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__aulK9)}
                role={"img"}
              />
            ),

            value: args.iconBack,
          })}
        </div>
      ) : null}
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBaseCard__ArgProps,
      internalVariantPropNames: PlasmicBaseCard__VariantProps,
    })

    return PlasmicBaseCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBaseCard"
  } else {
    func.displayName = `PlasmicBaseCard.${nodeName}`
  }
  return func
}

export const PlasmicBaseCard = Object.assign(
  // Top-level PlasmicBaseCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBaseCard
    internalVariantProps: PlasmicBaseCard__VariantProps,
    internalArgProps: PlasmicBaseCard__ArgProps,
  }
)

export default PlasmicBaseCard
/* prettier-ignore-end */
