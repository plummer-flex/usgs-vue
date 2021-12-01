<script>
/*
 * The usaPrimaryNav component expects the following parameters
 * @param options Options contains a list of menus, links, and form components
 *
 * Options Example:
 *
      const options = {
        basic: [
          {
            type: 'menu',
            label: 'My Menu 1',
            id: 'my-menu-1',
            subItems: [
              {
                label: 'Subitem 1',
                route: 'subItem1RouteName',
              },
              {
                label: 'Subitem 2',
                route: 'subItem2RouteName',
              },
            ]
          },
          {
            type: 'link',
            label: 'My Link 1',
            id: 'my-link-1',
            route: 'linkRoute1',
          },
        ],
        form: [
          {
            type: 'searchField',
            role: 'search',
            id: 'primary-search-field',
            fieldLabel: '',
            buttonLabel: 'Search',
            placeHolder: 'my placehold text',
            inputEmit: 'search-input',
            submitEmit: 'search-submit',
          },
        ]
      }
 *
 */
import { KEY_ENTER } from "@/utils/commonKeyCodes";

export default {
  name: "usa-primary-nav",
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  emits: ["search-input", "search-submit"],
  methods: {
    searchFormInput(event, id) {
      this.$emit("search-input", {
        id,
        event,
      });
    },
    searchFormKeyDown(event, id) {
      if (event.keyCode === KEY_ENTER) {
        this.$emit("search-submit", {
          id: id,
          event: event,
        });
      }
    },
    searchFormSubmit(event, id) {
      this.$emit("search-submit", {
        id: id,
        event: event,
      });
    },
  },
};
</script>

<template>
  <nav aria-label="Primary navigation" class="usa-nav">
    <button class="usa-nav__close">
      <img src="~uswds/dist/img/close.svg" role="img" alt="close" />
    </button>
    <ul class="usa-nav__primary usa-accordion" aria-expanded="false">
      <li
        class="usa-nav__primary-item"
        v-for="(option, index) in options.basic"
        :key="index"
      >
        <template v-if="option.type === 'menu'">
          <button
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            :aria-controls="`basic-nav-section-${option.id}`"
          >
            <span>{{ option.label }}</span>
          </button>
          <ul
            :id="`basic-nav-section-${option.id}`"
            class="usa-nav__submenu"
            hidden
          >
            <li
              class="usa-nav__submenu-item"
              v-for="(submenu, subindex) in option.subItems"
              :key="subindex"
            >
              <router-link :to="{ name: submenu.route }">{{
                submenu.label
              }}</router-link>
            </li>
          </ul>
        </template>
        <template v-if="option.type === 'link'">
          <router-link
            class="usa-nav__link"
            :to="{ name: option.route }"
            :id="`usa-nav-link-${option.id}`"
          >
            <span>{{ option.label }}</span>
          </router-link>
        </template>
      </li>
    </ul>
    <div
      class="usa-search usa-search--small"
      v-for="(form, formIndex) in options.form"
      :key="formIndex"
      :role="form.role"
    >
      <template v-if="form.type === 'searchField'">
        <label class="usa-sr-only" :for="form.id">
          {{ form.fieldLabel }}
        </label>
        <input
          class="usa-input"
          type="search"
          :id="form.id"
          :placeholder="form.placeHolder"
          @input="searchFormInput($event, form.id)"
          @keydown="searchFormKeyDown($event, form.id)"
        />
        <button
          class="usa-button"
          type="submit"
          @click="searchFormSubmit($event, form.id)"
        >
          <span class="usa-sr-only">{{ form.buttonLabel }}</span>
        </button>
      </template>
    </div>
  </nav>
</template>
