import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

const BallpitEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // 모듈 초기화
    const { Engine, Render, Runner, Bodies, Composite } = Matter

    // 엔진 생성
    const engine = Engine.create()
    engineRef.current = engine
    const world = engine.world
    engine.gravity.y = 1.5

    // 렌더러 생성
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    })

    Render.run(render)

    // 러너(Runner) 생성
    const runner = Runner.create()
    Runner.run(runner, engine)

    // 바닥과 양쪽 벽 생성
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      20,
      { isStatic: true, render: { fillStyle: 'transparent' } },
    )
    const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 20, window.innerHeight, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    })
    const rightWall = Bodies.rectangle(
      window.innerWidth,
      window.innerHeight / 2,
      20,
      window.innerHeight,
      { isStatic: true, render: { fillStyle: 'transparent' } },
    )

    // 월드에 바닥과 벽 추가
    Composite.add(world, [ground, leftWall, rightWall])

    // 볼 생성 및 월드에 추가
    const balls: Matter.Body[] = []

    const ballColors = ['#a6e6b6', '#fffae4', '#d8e5ff']
    const createBall = () => {
      const ball = Bodies.circle(Math.random() * (window.innerWidth - 100) + 50, -50, 35, {
        restitution: 0.8,
        friction: 0.1,
        density: 0.001,
        render: {
          fillStyle: ballColors[Math.floor(Math.random() * ballColors.length)],
          strokeStyle: '#000',
          lineWidth: 1,
        },
      })
      balls.push(ball)
      Composite.add(world, ball)
    }

    // n초 후에 공 생성을 중지합니다.
    const ballInterval = setInterval(createBall, 100)
    const stopAfterFiveSeconds = setTimeout(() => {
      clearInterval(ballInterval)
    }, 7000)

    // 클린업 함수
    return () => {
      clearInterval(ballInterval)
      clearTimeout(stopAfterFiveSeconds) // 타임아웃도 정리
      Render.stop(render)
      Runner.stop(runner)
      Composite.clear(world, false, true)
      Engine.clear(engine)
    }
  }, [])

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default BallpitEffect
