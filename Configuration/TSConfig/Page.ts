mod.SHARED {
	defaultLanguageFlag = dede
}


// Add Fluid Contentelment to wizzard
mod.wizards.newContentElement.wizardItems.common.elements.shortcut {
  icon = gfx/c_wiz/regular_header.gif
  title = Mein Element
  description = "Mein eigenes"-Element
  tt_content_defValues {
    CType = shortcut
  }
}
mod.wizards.newContentElement.wizardItems.common.show := addToList(shortcut)
mod.wizards.newContentElement.renderMode = tabs
mod.wizards.newContentElement.wizardItems.common {
 show = text,textpic,image,shortcut
}

mod.wizards.newContentElement.wizardItems.common.elements.tx_beipoa_fluidcontentelement {
    icon = gfx/c_wiz/multimedia.gif
    title = Audioelment
    description = Show Audio Content
    tt_content_defValues.CType = textpic
}
mod.wizards.newContentElement.wizardItems.common.show := addToList('tx_beipoa_fluidcontentelement')