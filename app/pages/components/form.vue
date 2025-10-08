<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z
    .string()
    .min(2)
    .max(50),
  email: z
    .string({ required_error: 'Please select an email to display.' })
    .email(),
  mobile: z
    .boolean(),
  type: z
    .enum(['all', 'mentions', 'none'], {
      required_error: 'You need to select a notification type.',
    }),
  duration: z
    .array(z.number().min(0).max(60)),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    duration: [30],
  },
})

const onSubmit = handleSubmit((values) => {
  toast('You submitted the following values:', {
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Form
        </h2>
        <p class="text-muted-foreground">
          Building forms with VeeValidate and Zod.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/form"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://vee-validate.logaretm.com/v4/guide/overview/"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <form class="w-full md:w-2/3 space-y-6" @submit="onSubmit">
              <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="shadcn" v-bind="componentField" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <Select v-bind="componentField">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                        <SelectItem value="m@google.com">
                          m@google.com
                        </SelectItem>
                        <SelectItem value="m@support.com">
                          m@support.com
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your
                    <a href="/examples/forms">email settings</a>.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ value, handleChange }" type="checkbox" name="mobile">
                <FormItem class="flex flex-row items-start gap-x-3 border rounded-md p-4 shadow space-y-0">
                  <FormControl>
                    <Checkbox :checked="value" @update:checked="handleChange" />
                  </FormControl>
                  <div class="leading-none space-y-1">
                    <FormLabel>Use different settings for my mobile devices</FormLabel>
                    <FormDescription>
                      You can manage your mobile notifications in the
                      <a href="/examples/forms">mobile settings</a> page.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" type="radio" name="type">
                <FormItem class="space-y-3">
                  <FormLabel>Notify me about...</FormLabel>

                  <FormControl>
                    <RadioGroup
                      class="flex flex-col space-y-1"
                      v-bind="componentField"
                    >
                      <FormItem class="flex items-center gap-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel class="font-normal">
                          All new messages
                        </FormLabel>
                      </FormItem>
                      <FormItem class="flex items-center gap-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel class="font-normal">
                          Direct messages and mentions
                        </FormLabel>
                      </FormItem>
                      <FormItem class="flex items-center gap-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel class="font-normal">
                          Nothing
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField, value }" name="duration">
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Slider
                      v-bind="componentField"
                      :default-value="[30]"
                      :max="100"
                      :min="0"
                      :step="5"
                    />
                    <FormDescription class="flex justify-between">
                      <span>How many minutes are you available?</span>
                      <span>{{ value?.[0] }} min</span>
                    </FormDescription>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <Button type="submit">
                Submit
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
