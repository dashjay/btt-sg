<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'home',
})
const questions = [
  {
    "question": [
      "When should you start to keep left after overtaking ?"
    ],
    "answers": [
      [
        "When you can see the overtaken vehicle in your left wing mirror.",
      ],
      [
        "When you can see the overtaken vehicle in your rear view mirror inside the cabin."
      ],
      [
        "As soon as you are ahead of the overtaken vehicle."
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "When being followed by a police vehicle with its siren on, you should"
    ],
    "answers": [
      [
        "pull over safely, as soon as possible to let it pass."
      ],
      [
        "accelerate quickly to get away from it."
      ],
      [
        "brake quickly and stop to let it pass."
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "When facing oncoming traffic at night, which lights should you use?"
    ],
    "answers": [
      [
        "High beam headlights."
      ],
      [
        "Spot lights."
      ],
      [
        "Dipped headlights."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "In addition to the speed limits to be followed on the roads, there are also speed limits assigned to various __________ types"
    ],
    "answers": [
      [
        "Road user"
      ],
      [
        "Vehicle"
      ],
      [
        "Non-road user"
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "Motorcyclists will often look over their right shoulder just before turning right. This is because"
    ],
    "answers": [
      [
        "they need to listen for following traffic."
      ],
      [
        "they need to check for traffic in their blind area."
      ],
      [
        "looking around helps them balance as they turn."
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "When approaching a road that is flooded but passable to vehicles, you should"
    ],
    "answers": [
      [
        "engage a lower gear to go through the flood."
      ],
      [
        "drive through as fast as possible."
      ],
      [
        "engage a higher gear to go through the flood."
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "When blinded by the headlights of an oncoming vehicle at night, you should"
    ],
    "answers": [
      [
        "close your eyes."
      ],
      [
        "pull down the sun visor."
      ],
      [
        "slow down or stop."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "When you see this sign, you should",
      "/storage/question/805.png"
    ],
    "answers": [
      [
        "slow down and keep left as you are approaching a right bend."
      ],
      [
        "slow down and give way to oncoming traffic before turning right."
      ],
      [
        "slow down and get ready to drive up a steep slope ahead."
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "In order to avoid an accident with the vehicle in front while driving under normal conditions you should use the"
    ],
    "answers": [
      [
        "Four-second rule."
      ],
      [
        "Two metre rule."
      ],
      [
        "Two-second rule."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "Which of the following statements on alcohol and driving is true?"
    ],
    "answers": [
      [
        "It is safe to drive one hour after having the last drink."
      ],
      [
        "It is safe to drive as long as you think you are not drunk."
      ],
      [
        "It is unsafe to drive after consuming alcohol."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "This sign indicates that",
      "/storage/question/816.png"
    ],
    "answers": [
      [
        "Driver must slow down and look out for traffic merging from the right or left."
      ],
      [
        "Driver must look out for traffic from the right and left at cross-road in front."
      ],
      [
        "Driver must reduce speed and drive carefully to prevent skidding."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "Which of the following statements can be considered to be true?"
    ],
    "answers": [
      [
        "You are allowed to learn to drive on road upon passing the Basic Theory Test (BTT)"
      ],
      [
        "You are allowed to drive on road without clearing the Basic Theory Test (BTT)"
      ],
      [
        "You are not allowed to drive on road unless you have passed the Final Theory Test (FTT)"
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "This sign means",
      "/storage/question/785.png"
    ],
    "answers": [
      [
        "Keep to the left side of the road."
      ],
      [
        "You cannot go straight or turn right."
      ],
      [
        "There is a sharp bend on the left - drive carefully."
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "All drivers are required by law to switch on the vehicle's headlights whilst driving between"
    ],
    "answers": [
      [
        "7.30 pm and 7.30 am."
      ],
      [
        "7.15 pm and 7.15 am."
      ],
      [
        "7.00 pm and 7.00 am."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "In addition to indicating your intention for a lane switch or a turn using the indicators, you should also"
    ],
    "answers": [
      [
        "Give time to other Drivers to react"
      ],
      [
        "Use hand signals"
      ],
      [
        "Use high beam and sound horn"
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "Blind spots' of a vehicle is an area which cannot be viewed by"
    ],
    "answers": [
      [
        "Left and right wings mirrors."
      ],
      [
        "All of them"
      ],
      [
        "The rear view mirror."
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "Motorists suspended under the DIPS program or has had the license revoked for more than a year must retake which of the following ?"
    ],
    "answers": [
      [
        "final theory test and practical driving test"
      ],
      [
        "Basic and final theory tests, practical driving test"
      ],
      [
        "basic theory test"
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "When you see this sign, you should",
      "/storage/question/804.png"
    ],
    "answers": [
      [
        "not slow down as you have the right of way."
      ],
      [
        "stop and give way to traffic from the right and left."
      ],
      [
        "slow down and beware of traffic from the left."
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "As a driver, if you fail to wear a seat belt, you will earn"
    ],
    "answers": [
      [
        "4 demerit points"
      ],
      [
        "3 demerit points"
      ],
      [
        "a fine"
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "During the basic theory test, it is intended that the following are tested."
    ],
    "answers": [
      [
        "Ability to drive a vehicle on the road"
      ],
      [
        "Candidate's general awareness"
      ],
      [
        "Knowledge on traffic signs, signals, road safety regulations"
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "When a car is stopping in front of a zebra crossing, you should"
    ],
    "answers": [
      [
        "slow down and be ready to stop for pedestrians to cross the road."
      ],
      [
        "sound the horn to warn pedestrians."
      ],
      [
        "quickly pass the vehicle before any pedestrians come along."
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "This sign means",
      "/storage/question/786.png"
    ],
    "answers": [
      [
        "Turn either side - vehicles must turn right or left."
      ],
      [
        "Split traffic - vehicles may pass on either side."
      ],
      [
        "Two-way traffic - beware of traffic from right and left."
      ]
    ],
    "answer_idx": 1
  },
  {
    "question": [
      "While driving on a flooded road, you should be cautious as"
    ],
    "answers": [
      [
        "your brakes may not work efficiently"
      ],
      [
        "water may get into the engine eventually stalling it"
      ],
      [
        "vehicle underbody could rust"
      ]
    ],
    "answer_idx": 0
  },
  {
    "question": [
      "The high beam mode on your vehicle headlight could be switched on"
    ],
    "answers": [
      [
        "indicate your urgency while using the road"
      ],
      [
        "overtake other vehicles on road easily"
      ],
      [
        "see things on an unlit road more clearly"
      ]
    ],
    "answer_idx": 2
  },
  {
    "question": [
      "When the traffic light turns green at a junction, you should"
    ],
    "answers": [
      [
        "depress the accelerator hard and move off quickly."
      ],
      [
        "only move off when other vehicles move."
      ],
      [
        "check traffic from right and left before moving off."
      ]
    ],
    "answer_idx": 2
  }
]

const config_auto_confirm_key = 'config.auto-confirm'
const config_auto_next_key = 'config.auto-next'
const current_question = ref(0)

const q = computed(() => {
  return questions[current_question.value]
})

const _auto_confirm = ref(false)
const _auto_next = ref(false)
const auto_confirm = () => {
  localStorage.setItem(config_auto_confirm_key, `${_auto_confirm.value}`)
}

const auto_next = () => {
  localStorage.setItem(config_auto_next_key, `${_auto_next.value}`)
}


const last = () => {
  if (current_question.value > 0) {
    current_question.value -= 1
    console.log(`current question: ${current_question.value}`)
  }
}

const next = () => {
  if (current_question.value < questions.length - 1) {
    current_question.value += 1
    console.log(`current question: ${current_question.value}`)
  }
}


const user_answers = ref<number[]>([])

const show_answers = ref<boolean[]>([])


const format = () => (`${current_question.value}/${questions.length}`)

const customColor = ref('#409eff')



let lastClickTime = 0;
const clickInterval = 1000; // 设置点击间隔为1秒
const showBottlneck = ref(true)
const Bottleneck = (cb: () => void) => {
  const now = Date.now();
  if (now - lastClickTime < clickInterval) {
    if (showBottlneck.value && user_answers.value[current_question.value] == -1) {
      ElMessage({
        message: 'answering!',
        type: 'warning',
      })
      showBottlneck.value = false
    }
    return
  }
  lastClickTime = now;
  cb()
  showBottlneck.value = true
};


function confirm_answer() {
  Bottleneck(() => {
    if (show_answers.value[current_question.value]) {
      ElMessage({
        message: 'answer confirmed',
        type: 'warning',
      })
      return
    }
    console.log(`user answer: ${user_answers.value[current_question.value]},`)
    if (user_answers.value[current_question.value] == -1) {
      ElMessage({
        message: 'empty answer',
        type: 'warning',
      })
      return
    }

    show_answers.value[current_question.value] = true
    if (user_answers.value[current_question.value] == q.value?.answer_idx) {
      ElMessage({
        message: 'correct !',
        type: 'success',
      })
      setTimeout(() => {
        if (_auto_next.value) {
          next()
        }
      }, 1000);

    } else {
      ElMessage({
        message: 'wrong answer !',
        type: 'warning',
      })
    }
  })
}


onMounted(() => {
  for (let i = 0; i < questions.length; i++) {
    user_answers.value.push(-1)
    show_answers.value.push(false)
  }
  const ac = localStorage.getItem(config_auto_confirm_key)
  if (ac && ac == 'true') {
    _auto_confirm.value = true
  }
  const an = localStorage.getItem(config_auto_next_key)
  if (an && an == 'true') {
    _auto_next.value = true
  }
})

</script>

<template>
  <el-container>
    <el-header>
      <Description />
      <el-switch v-model="_auto_confirm" size="large" active-text="Auto Confirm" @click="auto_confirm" />
      <el-switch
v-model="_auto_next" size="large" active-text="Auto Next" style="padding-left: 20px;"
        @click="auto_next" />
    </el-header>

    <el-main style="padding-top: 80px;">



      <el-card style="max-width: 700px; margin: auto">
        <template #header>
          <el-row :gutter="20">
            <el-col :span="6">
              <img
v-if="q?.question.some((item) => typeof item == 'string' && item.startsWith('/'))"
                :src="'https://www.tptest.sg' + (q?.question.filter((item) => typeof item == 'string' && item.startsWith('/'))[0])"
                style="width: 100%">
            </el-col>
            <el-col :span="14" style="align-content: center;">
              <span> {{q?.question.filter((item) => typeof item === "string" && !item.startsWith("/")).join("\n")}}
              </span>
            </el-col>

          </el-row>


        </template>

        <div v-for="(o, idx) in q?.answers" :key="idx" align="left">
          <el-row :gutter="24">
            <el-col :span="4">
              <el-radio
v-model="user_answers[current_question]" :disabled="user_answers[current_question] != -1"
                :value="idx" size="large" border @change="confirm_answer">{{
                  idx +
                  1 + ". "
                }}
              </el-radio>
            </el-col>
            <el-col
:span="14"
              :style="!show_answers[current_question] ? '' :
                q?.answer_idx == idx ?
                  'background-color: rgb(179, 224.5, 156.5)' : user_answers[current_question] != q?.answer_idx ? 'background-color: rgb(196, 86.4, 86.4)' : ''">
              {{o.filter((item) => typeof item === "string" && !item.startsWith("/")).join("\n")}}
            </el-col>
            <el-col :span="6">
              <img
v-if="o.some((item) => typeof item == 'string' && item.startsWith('/'))"
                :src="'https://www.tptest.sg' + (o.filter((item) => typeof item == 'string' && item.startsWith('/'))[0])"
                style="width: 100%">
            </el-col>
          </el-row>
        </div>
        <template #footer>
          Please chooes the correct answer
          <el-button
v-if="!_auto_confirm" type="primary" style="margin-left: 10px;"
            @click="confirm_answer">Confirm</el-button>
        </template>
      </el-card>



      <el-button style="margin-top: 12px" @click="last">Last Question</el-button>
      <el-button style="margin-top: 12px" @click="next">Next Question</el-button>

      <el-progress
:percentage="100 * (current_question+1 / questions.length)" :color="customColor" :format="format"
        style="padding-top: 10px;max-width: 800px;margin: auto" />



      <el-steps style="max-width: 800px;margin: auto" :active="current_question">
        <el-step
v-for="(ans, idx) in user_answers" :key="idx"
          :status="user_answers[idx] == -1 ? 'wait' : user_answers[idx] != questions.at(idx)?.answer_idx ? 'error' : 'success'" />
      </el-steps>

    </el-main>
  </el-container>
</template>

<style></style>