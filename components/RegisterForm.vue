<template>
<b-container class="bv-example-row">
  <b-row>
    <b-col>
        <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-1"
            label="Full name:"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Password"
            ></b-form-input>
        </b-form-group>

        
        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
    </b-col>
    
  </b-row>
</b-container>
 
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
        },
      }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.$axios.post('/auth/register', this.form).then(res => {
                this.$auth.loginWith('local', {
                    data: this.form
                });
            });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = '';
        this.form.password = '';
      }
    }
  }
</script>

<style>

</style>