ServerEvents.recipes(event => {
    event.remove({id: 'ad_astra:recipes/nasa_workbench'})
    event.recipes.createMechanicalCrafting(Item.of('ad_astra:nasa_workbench'), [
        'QLTLQ',
        'SCACS',
        'SAEAS',
        'SCNCS',
        'BIIIB'
    ], {
        Q: 'create:rose_quartz_lamp',
        L: 'create:analog_lever',
        T: 'create:powered_toggle_latch',
        S: 'ad_astra:steel_plate',
        C: 'extendedcrafting:redstone_component',
        A: 'extendedcrafting:redstone_catalyst',
        E: 'extendedcrafting:ultimate_auto_table',
        N: 'extendedcrafting:enhanced_redstone_catalyst',
        B: 'minecraft:redstone_block',
        I: 'ad_astra:steel_block'
    }).id('finality:nasa_workbench')
})