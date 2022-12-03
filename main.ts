enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Monster = SpriteKind.create()
}
controller.combos.attachCombo("Left right", function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
})
controller.combos.attachCombo("Right down", function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d f d d f d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        . . . . c f 7 7 7 d d c c c c c 
        . . . . . f f 7 7 7 d d d d f . 
        . . . . f 7 7 7 7 f f f f f . . 
        f f . f 7 7 7 7 7 7 f f . . . . 
        f 7 . f 7 7 f 7 7 f 7 7 f . . . 
        f 7 . f 7 7 7 f 7 7 f 7 7 f . . 
        f 7 f f 7 f b b f b d f d b f . 
        f f f f 7 b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d f d d f d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        . . . . c f 7 7 7 d d c c c c c 
        . . . . . f f 7 7 7 d d d d f . 
        . . . . f 7 7 7 f f 7 7 7 f . . 
        f f . f 7 7 7 7 7 f f f f f . . 
        f 7 . f 7 7 f f 7 7 f b d f . . 
        f 7 . f 7 7 7 f f 7 f d d f f . 
        f 7 f f 7 f b b 7 f f f f f f . 
        f f f f 7 b d d 7 7 7 f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f 7 7 7 7 7 f . . . . 
        . . . . f 7 7 d d d d d f . . . 
        . . . f f 7 d f f d d f f f . . 
        . . f d d 7 d d d d b b d d c . 
        . f f f d 7 d d c d d d d c c . 
        f d b f d 7 d d d c c c c d c . 
        f d d f f 7 7 d d d d d d c . . 
        f f f 7 f f 7 7 d d d d c . . . 
        . . f 7 7 7 f 7 7 f f f . . . . 
        . f f f 7 7 7 7 7 7 7 f . . . . 
        . f 7 f f f 7 7 7 7 7 7 f . . . 
        . f 7 f f f f f 7 7 7 7 f f . . 
        . f 7 f f f b b f 7 7 f d b f . 
        . f f f f b d d f 7 7 f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f 7 7 7 7 7 f . . . . 
        . . . . f 7 d d d d d d f . . . 
        . . . f f d f f d d f f d f . . 
        . . f d 7 d d d d b b d d d c . 
        . . f f 7 d d c d d d d c d c . 
        f f f f 7 d d d c c c c d d c . 
        f d b f f 7 d d d d d d d c . . 
        f d d f f f 7 7 d d d d c . . . 
        f f f 7 7 7 f 7 7 f f f . . . . 
        . f f f 7 7 7 7 7 7 7 f . . . . 
        . f 7 f f f 7 7 7 7 7 7 f . . . 
        . f 7 f f f f f 7 7 7 7 f f . . 
        . f 7 f f f b b f 7 7 f d b f . 
        . f f f f b d d f f f f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d d d d d f . . 
        . . . f d d 7 7 d f f d d d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d f f c 
        . . . . f 7 7 7 f f f 7 f d d f 
        . . . . f f f f f 7 7 7 f d d f 
        . f f . f f 7 7 7 7 7 f f f f f 
        . f 7 . f f 7 7 7 f f 7 f f f . 
        . f 7 f f f b b f f 7 f d b f . 
        . f 7 f f b d d f 7 7 f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d d f d d f . . 
        . . . f d d 7 7 d d f d d d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        . . . f c f 7 7 d d d f f f f c 
        . . . . f 7 7 7 7 f f f d b f . 
        . . . . f 7 7 f f f 7 f d d f . 
        . f f . f f f 7 7 7 7 f f f . . 
        . f 7 . f f 7 7 7 7 f 7 7 f . . 
        . f 7 f f f f f f f 7 7 7 f f . 
        . f 7 f f f b b f 7 7 f d b f . 
        . f f f f b d d 7 7 f f d d f . 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . c c c c 6 3 c . . . 
        . . . . . c 6 6 3 3 3 6 c . . . 
        . . . . c 6 6 3 3 3 3 3 3 c . . 
        b c c c 6 6 c c 3 3 3 3 3 3 c . 
        b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
        f f 5 c 6 c 5 f f 6 3 3 3 c c . 
        f f 5 c c c 5 f f 6 6 6 6 c c . 
        . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
        . c 5 5 5 5 4 c c c 3 3 3 3 c . 
        . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
        . c 5 b 4 4 b b 5 c b b c . . . 
        . c c 5 4 c 5 5 5 c c 5 c . . . 
        . . . c c 5 5 5 5 c c c c . . . 
        . . . . c c c c c c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
        c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
        b 5 4 b 4 4 4 c 5 5 5 b c c . . 
        c 4 5 5 b 4 4 c 5 5 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
        c 5 5 5 5 c 4 c c c c c c 5 c . 
        . c c c c c c . . . . . c c c . 
        `],
    100,
    true
    )
})
controller.combos.attachCombo("Left down", function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . c d f d d f d 7 7 f f . . . . 
        . c d f d d f d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c d d d d c d d 7 7 b d c . . . 
        c c c c c d d 7 7 7 f c . . . . 
        . f d d d d 7 7 7 f f . . . . . 
        . . f f f f f 7 7 7 7 f . . . . 
        . . . . f f 7 7 7 7 7 7 f . f f 
        . . . f 7 7 f 7 7 f 7 7 f . 7 f 
        . . f 7 7 f 7 7 f 7 7 7 f . 7 f 
        . f b d f d b f b b f 7 f f 7 f 
        . f d d f d d f d d b 7 f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . c d f d d f d 7 7 f f . . . . 
        . c d f d d f d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c d d d d c d d 7 7 b d c . . . 
        c c c c c d d 7 7 7 f c . . . . 
        . f d d d d 7 7 7 f f . . . . . 
        . . f 7 7 7 f f 7 7 7 f . . . . 
        . . f f f f f 7 7 7 7 7 f . f f 
        . . f d b f 7 7 f f 7 7 f . 7 f 
        . f f d d f 7 f f 7 7 7 f . 7 f 
        . f f f f f f 7 b b f 7 f f 7 f 
        . f d d f 7 7 7 d d b 7 f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . f d d d d d 7 7 f . . . . 
        . . f f f d d f f d 7 f f . . . 
        . c d d b b d d d d 7 d d f . . 
        . c c d d d d c d d 7 d f f f . 
        . c d c c c c d d d 7 d f b d f 
        . . c d d d d d d 7 7 f f d d f 
        . . . c d d d d 7 7 f f 7 f f f 
        . . . . f f f 7 7 f 7 7 7 f . . 
        . . . . f 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 f f f 7 f . 
        . . f f 7 7 7 7 f f f f f 7 f . 
        . f b d f 7 7 f b b f f f 7 f . 
        . f d d f 7 7 f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . f d d d d d d 7 f . . . . 
        . . f d f f d d f f d f f . . . 
        . c d d d b b d d d d 7 d f . . 
        . c d c d d d d c d d 7 f f . . 
        . c d d c c c c d d d 7 f f f f 
        . . c d d d d d d d 7 f f b d f 
        . . . c d d d d 7 7 f f f d d f 
        . . . . f f f 7 7 f 7 7 7 f f f 
        . . . . f 7 7 7 7 7 7 7 f f f . 
        . . . f 7 7 7 7 7 7 f f f 7 f . 
        . . f f 7 7 7 7 f f f f f 7 f . 
        . f b d f 7 7 f b b f f f 7 f . 
        . f d d f f f f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . . f d d f d d 7 7 f f . . . . 
        . c d d d f d d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c d d d d c d d 7 7 b d c . . . 
        c f f f f d d d 7 7 f c f . . . 
        . f b d f f f 7 7 7 7 f . . . . 
        . f d d f 7 f f f 7 7 f . . . . 
        . . f f f 7 7 7 7 f f f . f f . 
        . . f 7 7 f 7 7 7 7 f f . 7 f . 
        . f f 7 7 7 f f f f f f f 7 f . 
        . f b d f 7 7 f b b f f f 7 f . 
        . f d d f f 7 7 d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . . f d d d d d 7 7 f f . . . . 
        . c d d d f f d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c f f d d c d d 7 7 b d c . . . 
        f d d f 7 f f f 7 7 7 f . . . . 
        f d d f 7 7 7 f f f f f . . . . 
        f f f f f 7 7 7 7 7 f f . f f . 
        . f f f 7 f f 7 7 7 f f . 7 f . 
        . f b d f 7 f f b b f f f 7 f . 
        . f d d f 7 7 f d d b f f 7 f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    false
    )
})
info.onCountdownEnd(function () {
    mySprite2 = sprites.create(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d f d d f d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        . . . . c f 7 7 7 d d c c c c c 
        . . . . . f f 7 7 7 d d d d f . 
        . . . . f 7 7 7 7 f f f f f . . 
        f f . f 7 7 7 7 7 7 f f . . . . 
        f 7 . f 7 7 f 7 7 f 7 7 f . . . 
        f 7 . f 7 7 7 f 7 7 f 7 7 f . . 
        f 7 f f 7 f b b f b d f d b f . 
        f f f f 7 b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2, 100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    100,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d f d d f d c . 
        . . . c d b 7 7 d d d d b b d c 
        f f . c d b 7 7 d d c d d d d c 
        f 7 f . c f 7 7 d d d c c c c c 
        f 7 f . . f f 7 7 d d d d d f . 
        f 7 f . f 7 7 7 7 f f f f f . . 
        f 7 f f 7 7 7 7 7 7 7 f . . . . 
        . f f 7 7 7 7 f 7 f f 7 f . . . 
        . . f 7 7 7 7 f 7 f f 7 f . . . 
        . . . f 7 f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . . f 7 7 d f d d f d c . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        f f . c d b 7 7 7 d d c c c c c 
        f 7 f . c f f 7 7 7 d d d d f . 
        f 7 f . f 7 7 7 7 f f f f f f . 
        f 7 f f 7 7 7 7 7 7 7 f f f f . 
        . f f 7 7 7 7 f 7 f d d f d d f 
        . . f 7 7 7 7 f 7 f b d f b d f 
        . . f 7 f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . f f 7 7 7 d d d d f . . 
        . . . f d d 7 7 d d d d d d c . 
        . . . c d b 7 7 d f d d f d c . 
        f f . c d b 7 7 d f d d f d d c 
        f 7 f . c f 7 7 d d d d b b d c 
        f 7 f . . f 7 7 7 d c d d d d c 
        f 7 f . . f f 7 7 7 d c c c f . 
        f 7 f . f 7 7 7 7 f f f f f . . 
        . f f f 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 f 7 7 f 7 f f . . 
        . . f 7 7 7 f f f 7 7 f f 7 f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f 7 7 7 7 7 f . . . 
        . . . f d d 7 7 7 7 d d d f . . 
        . . . c d b 7 7 7 d d d d d c . 
        . . . c d b 7 7 d d d d d d c . 
        . f f . c f 7 7 d f d d f d d c 
        f 7 f . . f 7 7 d f d d f d d c 
        f 7 f . . f 7 7 d d d d b b d c 
        f 7 f . . f f 7 7 d c d d d f . 
        f 7 f . f 7 7 7 7 7 d f f f . . 
        . f f f 7 7 7 7 7 7 7 f . . . . 
        . . f f b 7 7 7 7 7 f f . . . . 
        . . f f d d c 7 7 f f 7 f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 7 7 7 7 7 f . . . 
        . . . . . f 7 7 7 d d d d f . . 
        . . . . f f 7 7 d f d d f d c . 
        . . . f d d 7 7 d f d d f d c . 
        . . . c d b 7 7 d d d d b b d c 
        . . . c d b 7 7 d d c d d d d c 
        . . . . c f 7 7 7 d d c c c c c 
        . . . . . f f 7 7 7 d d d d f . 
        . . . . f 7 7 7 7 f f f f f . . 
        f f . f 7 7 7 7 7 7 f f . . . . 
        f 7 . f 7 7 f 7 7 f 7 7 f . . . 
        f 7 . f 7 7 7 f 7 7 f 7 7 f . . 
        f 7 f f 7 f b b f b d f d b f . 
        f f f f 7 b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
})
controller.combos.attachCombo("A B", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 3 c 3 5 f f . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 c c 6 6 c c c c c . 
        c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
        c c 6 6 6 f f 5 c 3 c c c 5 f f 
        c 3 3 3 3 f f 5 c c c c c 5 f f 
        c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
        . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
        . . b b c 4 5 5 4 4 4 4 5 5 4 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c c . . . . . . 
        . c c 6 3 3 3 3 6 6 c . . . . . 
        c 6 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c . . . . 
        c 3 3 3 3 6 6 6 6 6 6 c c c . . 
        c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
        c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
        c 3 3 3 3 3 6 c c c c c c c c c 
        . c c c 6 6 c 4 5 5 c c 4 5 5 c 
        . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
        . . . . c c c c c c c c c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . . . . . . . 
        . c 3 6 c c c c c . . . c . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . . . c . . . 
        . c 3 6 c c c c c . . . . . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . c . . . . . 
        . c 3 6 c c c c c . . . . . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . c . . . . . . 
        . c 3 6 c c c c c . . . . . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `],
    100,
    false
    )
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3900, 1, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . c d f d d f d 7 7 f f . . . . 
        . c d f d d f d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c d d d d c d d 7 7 b d c . f f 
        c c c c c d d d 7 7 f c . f 7 f 
        . f d d d d d 7 7 f f . . f 7 f 
        . . f f f f f 7 7 7 7 f . f 7 f 
        . . . . f 7 7 7 7 7 7 7 f f 7 f 
        . . . f 7 f f 7 f 7 7 7 7 f f . 
        . . . f 7 f f 7 f 7 7 7 7 f . . 
        . . . f d b f d b f f 7 f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . c d f d d f d 7 7 f . . . . . 
        . c d f d d f d 7 7 f f . . . . 
        c d b b d d d d 7 7 d d f . . . 
        c d d d d c d d 7 7 b d c . . . 
        c c c c c d d 7 7 7 b d c . f f 
        . f d d d d 7 7 7 f f c . f 7 f 
        . f f f f f f 7 7 7 7 f . f 7 f 
        . f f f f 7 7 7 7 7 7 7 f f 7 f 
        f d d f d d f 7 f 7 7 7 7 f f . 
        f d b f d b f 7 f 7 7 7 7 f . . 
        f f f f f f f f f f f f 7 f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f f . . . . 
        . c d d d d d d 7 7 d d f . . . 
        . c d f d d f d 7 7 b d c . . . 
        c d d f d d f d 7 7 b d c . f f 
        c d b b d d d d 7 7 f c . f 7 f 
        c d d d d c d 7 7 7 f . . f 7 f 
        . f c c c d 7 7 7 f f . . f 7 f 
        . . f f f f f 7 7 7 7 f . f 7 f 
        . . . . f 7 7 7 7 7 7 7 f f f . 
        . . f f 7 f 7 7 f 7 7 7 7 f . . 
        . f 7 f f 7 7 f f f 7 7 7 f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f f f . . . . 
        . . f d d d 7 7 7 7 d d f . . . 
        . c d d d d d 7 7 7 b d c . . . 
        . c d d d d d d 7 7 b d c . . . 
        c d d f d d f d 7 7 f c . f f . 
        c d d f d d f d 7 7 f . . f 7 f 
        c d b b d d d d 7 7 f . . f 7 f 
        . f d d d c d 7 7 f f . . f 7 f 
        . . f f f d 7 7 7 7 7 f . f 7 f 
        . . . . f 7 7 7 7 7 7 7 f f f . 
        . . . . f f 7 7 7 7 7 b f f . . 
        . . . f 7 f f 7 7 c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f 7 7 7 7 7 f . . . . . . 
        . . f d d d d 7 7 7 f . . . . . 
        . c d f d d f d 7 7 f f . . . . 
        . c d f d d f d 7 7 d d f . . . 
        c d b b d d d d 7 7 b d c . . . 
        c d d d d c d d 7 7 b d c . . . 
        c c c c c d d 7 7 7 f c . . . . 
        . f d d d d 7 7 7 f f . . . . . 
        . . f f f f f 7 7 7 7 f . . . . 
        . . . . f f 7 7 7 7 7 7 f . f f 
        . . . f 7 7 f 7 7 f 7 7 f . 7 f 
        . . f 7 7 f 7 7 f 7 7 7 f . 7 f 
        . f b d f d b f b b f 7 f f 7 f 
        . f d d f d d f d d b 7 f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    true
    )
})
controller.combos.attachCombo("Down right", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333cc6c.cc..........
        c33333c55c6c55b.........
        c33333ff5c6c5ff.........
        cc3336ff5c6c5ff.........
        cc6666c553c355b.........
        c333333c55355b..........
        c3333ccb55555cc.........
        .c33c55b4555455c........
        ..bbc5bb4444b45b........
        .b54c4555b4b554c........
        .c5c4c555c4c555c........
        .c5c4c5555c5555c........
        .ccc..ccccccccc.........
        `,img`
        ........................
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c33333cc66cccb..........
        c3333c55c6c55b..........
        cc333ff5c6c5ff..........
        cc666ff5ccc5ff..........
        c33333c55355b...........
        c333ccb55555cc..........
        .c3c5cccccccc5c.........
        ..bc55555c5555c.........
        .b5c4555c4c555c.........
        .c54c555c4c554c.........
        .ccccccc444ccc..........
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c333ccccccc............
        c333c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55c55c5c55c.........
        c33c4cff5ccc5ff.........
        c33c5cff5ccc5ff.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ..cc....................
        .c36cccccccc............
        cc63c555c555c...........
        c33c555c4c555c..........
        c33c555c4c555c..........
        c33c555c4c555c..........
        cc3c555ccc55cc..........
        cc6c55ff5ccc5ff.........
        c33c4cff5ccc5ff.........
        c33c5cc55ccc55c.........
        c33c5cc55ccc55c.........
        .ccc54c553c355c.........
        .c54c44c55555c..........
        .c5cccc45555cc..........
        .c5cccc4555cc...........
        .ccc..cccccc............
        `,img`
        ........................
        ........................
        ........................
        .....cc.................
        ....c36cccc.............
        ...cc633336cc...........
        ..c3333336666c..........
        ..c3333366666c..........
        ..cc333666cccc.cc.......
        ..cc66666c55ccc55c......
        ..c333366ff5ccc5ff......
        ..c333336ff5ccc5ff......
        ..c333333c5555bbbbbbbb..
        ...c54c3ccccc455555c55c.
        ...c5cccc45554555555c55c
        ...ccc.ccccccccccccccccc
        `,img`
        ...cc...................
        ..c36cccc...............
        ..c633336c..............
        .c33333366c.............
        c3333336666c............
        c333336cc66cccb.........
        cc3336c55c6c55b.........
        cc6666ff5c6c5ff.........
        c33333ff5cc35ff.........
        c33333c555355b..........
        .c33333c45554c..........
        ..bbccccb44bbbbbb.......
        .b54ccc55cbb555b5c......
        .c5ccccc5545555c5c......
        .c5c...cc5455555c5c.....
        .ccc....ccccccccccc.....
        `],
    100,
    false
    )
})
controller.combos.attachCombo("Down left", function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `,img`
        ........................
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ..........bccc66cc33333c
        ..........b55c6c55c3333c
        ..........ff5c6c5ff333cc
        ..........ff5ccc5ff666cc
        ...........b55355c33333c
        ..........cc55555bcc333c
        .........c5cccccccc5c3c.
        .........c5555c55555cb..
        .........c555c4c5554c5b.
        .........c455c4c555c45c.
        ..........ccc444ccccccc.
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ............ccccccc333c.
        ...........c555c555c333c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........c55c5c55c55c6cc
        .........ff5ccc5ffc4c33c
        .........ff5ccc5ffc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ....................cc..
        ............cccccccc63c.
        ...........c555c555c36cc
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........c555c4c555c33c
        ..........cc55ccc555c3cc
        .........ff5ccc5ff55c6cc
        .........ff5ccc5ffc4c33c
        .........c55ccc55cc5c33c
        .........c55ccc55cc5c33c
        .........c553c355c45ccc.
        ..........c55555c44c45c.
        ..........cc55554cccc5c.
        ...........cc5554cccc5c.
        ............cccccc..ccc.
        `,img`
        ........................
        ........................
        ........................
        .................cc.....
        .............cccc63c....
        ...........cc633336cc...
        ..........c6666333333c..
        ..........c6666633333c..
        .......cc.cccc666333cc..
        ......c55ccc55c66666cc..
        ......ff5ccc5ff663333c..
        ......ff5ccc5ff633333c..
        ..bbbbbbbb5555c333333c..
        .c55c555554ccccc3c45c...
        c55c55555545554cccc5c...
        ccccccccccccccccc.ccc...
        `,img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        .............c66333333c.
        ............c6666333333c
        .........bccc66cc633333c
        .........b55c6c55c6333cc
        .........ff5c6c5ff6666cc
        .........ff53cc5ff33333c
        ..........b553555c33333c
        ..........c45554c33333c.
        .......bbbbbb44bccccbb..
        ......c5b555bbc55ccc45b.
        ......c5c5555455ccccc5c.
        .....c5c5555545cc...c5c.
        .....ccccccccccc....ccc.
        `],
    100,
    false
    )
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . . c 5 5 5 5 b c c 3 3 3 3 3 c 
    . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
    . c 5 b 4 4 b b 5 c c b b b . . 
    . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
    . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
    . c 5 c 5 5 5 5 c 4 4 4 c c c . 
    . . c c c c c c c . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c . . 
    . . . . . . . c c c c c 6 3 c . 
    . . . . . . c 6 6 3 3 3 6 6 c . 
    . . . . . c 6 6 6 3 3 3 3 3 3 c 
    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
    . . c c c 6 6 6 6 6 3 3 3 3 3 c 
    . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
    c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
    c 6 c c c c 3 c 6 6 6 6 6 6 c c 
    c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
    . c 6 c c c c 6 c 6 3 3 3 3 6 c 
    . . c 6 c c c c c 6 3 3 3 6 c . 
    . . . c c c c c c c c c c c . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . c c c c c 6 3 c . . 
    . . . . . c 6 6 3 3 3 3 6 c c . 
    . . . . c 6 6 6 6 3 3 3 3 3 6 c 
    . . . . c 6 6 6 6 6 3 3 3 3 3 c 
    . . c c c 6 6 6 6 6 6 3 3 3 3 c 
    . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
    c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
    c c c c c c c c c 6 3 3 3 3 3 c 
    c 5 5 4 c c 5 5 4 c 6 6 c c c . 
    c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
    . c c c c c c c c c c c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . . . . c 6 6 3 3 3 3 3 3 c . 
    . . . . c 6 6 6 6 3 3 3 3 3 3 c 
    . c c c c c 6 6 c c 3 3 3 3 3 c 
    b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
    f f 5 c c c 3 c 5 f f 6 6 6 c c 
    f f 5 c c c c c 5 f f 3 3 3 3 c 
    . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
    . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
    c 4 5 5 4 4 4 4 5 5 4 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `,img`
    . . . . . . . . . . . c c . . . 
    . . c c . c c c c 3 c 6 3 c . . 
    . f f 5 c 6 c 5 f f 3 3 6 c . . 
    . f f 5 c 6 c 5 f f 3 3 3 3 c . 
    . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
    . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
    . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
    . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
    b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
    c 4 5 5 b 4 b 5 5 5 4 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . f f 5 3 c 3 5 f f 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `,img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `],
100,
false
)
controller.combos.setTriggerType(TriggerType.Continuous)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.setBounceOnWall(false)
info.setLife(10)
info.setScore(0)
info.startCountdown(10)
grid.snap(mySprite)
mySprite.setPosition(126, 84)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
