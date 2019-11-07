# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.


## A Good Data Model
- Captures all the information the system needs
- Captures ONLY the information the system needs
- Reflects reality from the point of the view of the system (mets all requirements)
- Is flexible can evolve with the system
- Is driven by the way we access

## What are the components of a data model?

- Entities (examples: zoo, animal, species)
- properties =-> columns/fields
- relationships --> Foreign Keys

## Nice and simple work flow

- identify entities
- identify properties
- identify relationships

## Relationships
- one to one (real and conceptual)
- one to many (most common!)
- many to many (this is smoke and mirrors)

## Mantras:

- Every Table Must have a Primary Key
- Work on **two or three* entities at a time
- the foreign keys always gos in the many side
- many tp many relationship are model using a third table


- Many to Many relationships is when a third table has more than one foreign key

- a third table can have multiple columns