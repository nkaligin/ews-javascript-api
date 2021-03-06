export class Strings {
    static CannotRemoveSubscriptionFromLiveConnection: string = "Subscriptions can't be removed from an open connection.";
    static ReadAccessInvalidForNonCalendarFolder: string = "The Permission read access value {0} can't be used with a non-calendar folder.";
    static PropertyDefinitionPropertyMustBeSet: string = "The PropertyDefinition property must be set.";
    static ArgumentIsBlankString: string = "The argument contains only white space characters.";
    static InvalidAutodiscoverDomainsCount: string = "At least one domain name must be requested.";
    static MinutesMustBeBetween0And1439: string = "minutes must be between 0 and 1439, inclusive.";
    static DeleteInvalidForUnsavedUserConfiguration: string = "This user configuration object can't be deleted because it's never been saved.";
    static PeriodNotFound: string = "Invalid transition. A period with the specified Id couldn't be found: {0}";
    static InvalidAutodiscoverSmtpAddress: string = "A valid SMTP address must be specified.";
    static InvalidOAuthToken: string = "The given token is invalid.";
    static MaxScpHopsExceeded: string = "The number of SCP URL hops exceeded the limit.";
    static ContactGroupMemberCannotBeUpdatedWithoutBeingLoadedFirst: string = "The contact group's Members property must be reloaded before newly-added members can be updated.";
    static CurrentPositionNotElementStart: string = "The current position is not the start of an element.";
    static CannotConvertBetweenTimeZones: string = "Unable to convert {0} from {1} to {2}.";
    static FrequencyMustBeBetween1And1440: string = "The frequency must be a value between 1 and 1440.";
    static CannotSetDelegateFolderPermissionLevelToCustom: string = "This operation can't be performed because one or more folder permission levels were set to Custom.";
    static PartnerTokenIncompatibleWithRequestVersion: string = "TryGetPartnerAccess only supports {0} or a later version in Microsoft-hosted data center.";
    static InvalidAutodiscoverRequest: string = "Invalid Autodiscover request: '{0}'";
    static InvalidAsyncResult: string = "The IAsyncResult object was not returned from the corresponding asynchronous method of the original ExchangeService object.";
    static InvalidMailboxType: string = "The mailbox type isn't valid.";
    static AttachmentCollectionNotLoaded: string = "The attachment collection must be loaded.";
    static ParameterIncompatibleWithRequestVersion: string = "The parameter {0} is only valid for Exchange Server version {1} or a later version.";
    static DayOfWeekIndexMustBeSpecifiedForRecurrencePattern: string = "The recurrence pattern's DayOfWeekIndex property must be specified.";
    static WLIDCredentialsCannotBeUsedWithLegacyAutodiscover: string = "This type of credentials can't be used with this AutodiscoverService.";
    static PropertyCannotBeUpdated: string = "This property can't be updated.";
    static IncompatibleTypeForArray: string = "Type {0} can't be used as an array of type {1}.";
    static PercentCompleteMustBeBetween0And100: string = "PercentComplete must be between 0 and 100.";
    static AutodiscoverServiceIncompatibleWithRequestVersion: string = "The Autodiscover service only supports {0} or a later version.";
    static InvalidAutodiscoverSmtpAddressesCount: string = "At least one SMTP address must be requested.";
    static ServiceUrlMustBeSet: string = "The Url property on the ExchangeService object must be set.";
    static ItemTypeNotCompatible: string = "The item type returned by the service ({0}) isn't compatible with the requested item type ({1}).";
    static AttachmentItemTypeMismatch: string = "Can not update this attachment item since the item in the response has a different type.";
    static UnsupportedWebProtocol: string = "Protocol {0} isn't supported for service requests.";
    static EnumValueIncompatibleWithRequestVersion: string = "Enumeration value {0} in enumeration type {1} is only valid for Exchange version {2} or later.";
    static UnexpectedElement: string = "An element node '{0}:{1}' of the type {2} was expected, but node '{3}' of type {4} was found.";
    static InvalidOrderBy: string = "At least one of the property definitions in the OrderBy clause is null.";
    static NoAppropriateConstructorForItemClass: string = "No appropriate constructor could be found for this item class.";
    static SearchFilterAtIndexIsInvalid: string = "The search filter at index {0} is invalid.";
    static DeletingThisObjectTypeNotAuthorized: string = "Deleting this type of object isn't authorized.";
    static PropertyCannotBeDeleted: string = "This property can't be deleted.";
    static ValuePropertyMustBeSet: string = "The Value property must be set.";
    static TagValueIsOutOfRange: string = "The extended property tag value must be in the range of 0 to 65,535.";
    static ItemToUpdateCannotBeNullOrNew: string = "Items[{0}] is either null or does not have an Id.";
    static SearchParametersRootFolderIdsEmpty: string = "SearchParameters must contain at least one folder id.";
    static MailboxQueriesParameterIsNotSpecified: string = "The collection of query and mailboxes parameter is not specified.";
    static FolderPermissionHasInvalidUserId: string = "The UserId in the folder permission at index {0} is invalid. The StandardUser, PrimarySmtpAddress, or SID property must be set.";
    static InvalidAutodiscoverDomain: string = "The domain name must be specified.";
    static MailboxesParameterIsNotSpecified: string = "The array of mailboxes (in legacy DN) is not specified.";
    static ParentFolderDoesNotHaveId: string = "parentFolder doesn't have an Id.";
    static DayOfMonthMustBeSpecifiedForRecurrencePattern: string = "The recurrence pattern's DayOfMonth property must be specified.";
    static ClassIncompatibleWithRequestVersion: string = "Class {0} is only valid for Exchange version {1} or later.";
    static CertificateHasNoPrivateKey: string = "The given certificate does not have the private key. The private key is necessary to sign part of the request message.";
    static InvalidOrUnsupportedTimeZoneDefinition: string = "The time zone definition is invalid or unsupported.";
    static HourMustBeBetween0And23: string = "Hour must be between 0 and 23.";
    static TimeoutMustBeBetween1And1440: string = "Timeout must be a value between 1 and 1440.";
    static CredentialsRequired: string = "Credentials are required to make a service request.";
    static MustLoadOrAssignPropertyBeforeAccess: string = "You must load or assign this property before you can read its value.";
    static InvalidAutodiscoverServiceResponse: string = "The Autodiscover service response was invalid.";
    static CannotCallConnectDuringLiveConnection: string = "The connection has already opened.";
    static ObjectDoesNotHaveId: string = "This service object doesn't have an ID.";
    static CannotAddSubscriptionToLiveConnection: string = "Subscriptions can't be added to an open connection.";
    static MaxChangesMustBeBetween1And512: string = "MaxChangesReturned must be between 1 and 512.";
    static AttributeValueCannotBeSerialized: string = "Values of type '{0}' can't be used for the '{1}' attribute.";
    static NumberOfDaysMustBePositive: string = "NumberOfDays must be zero or greater. Zero indicates no limit.";
    static SearchFilterMustBeSet: string = "The SearchFilter property must be set.";
    static EndDateMustBeGreaterThanStartDate: string = "EndDate must be greater than StartDate.";
    static InvalidDateTime: string = "Invalid date and time: {0}.";
    static UpdateItemsDoesNotAllowAttachments: string = "This operation can't be performed because attachments have been added or deleted for one or more items.";
    static TimeoutMustBeGreaterThanZero: string = "Timeout must be greater than zero.";
    static AutodiscoverInvalidSettingForOutlookProvider: string = "The requested setting, '{0}', isn't supported by this Autodiscover endpoint.";
    static InvalidRedirectionResponseReturned: string = "The service returned an invalid redirection response.";
    static ExpectedStartElement: string = "The start element was expected, but node '{0}' of type {1} was found.";
    static DaysOfTheWeekNotSpecified: string = "The recurrence pattern's property DaysOfTheWeek must contain at least one day of the week.";
    static FolderToUpdateCannotBeNullOrNew: string = "Folders[{0}] is either null or does not have an Id.";
    static PartnerTokenRequestRequiresUrl: string = "TryGetPartnerAccess request requires the Url be set with the partner's autodiscover url first.";
    static NumberOfOccurrencesMustBeGreaterThanZero: string = "NumberOfOccurrences must be greater than 0.";
    static StartTimeZoneRequired: string = "StartTimeZone required when setting the Start, End, IsAllDayEvent, or Recurrence properties.  You must load or assign this property before attempting to update the appointment.";
    static PropertyAlreadyExistsInOrderByCollection: string = "Property {0} already exists in OrderByCollection.";
    static ItemAttachmentMustBeNamed: string = "The name of the item attachment at index {0} must be set.";
    static InvalidAutodiscoverSettingsCount: string = "At least one setting must be requested.";
    static LoadingThisObjectTypeNotSupported: string = "Loading this type of object is not supported.";
    static UserIdForDelegateUserNotSpecified: string = "The UserId in the DelegateUser hasn't been specified.";
    static PhoneCallAlreadyDisconnected: string = "The phone call has already been disconnected.";
    static OperationDoesNotSupportAttachments: string = "This operation isn't supported on attachments.";
    static UnsupportedTimeZonePeriodTransitionTarget: string = "The time zone transition target isn't supported.";
    static IEnumerableDoesNotContainThatManyObject: string = "The IEnumerable doesn't contain that many objects.";
    static UpdateItemsDoesNotSupportNewOrUnchangedItems: string = "This operation can't be performed because one or more items are new or unmodified.";
    static ValidationFailed: string = "Validation failed.";
    static InvalidRecurrencePattern: string = "Invalid recurrence pattern: ({0}).";
    static TimeWindowStartTimeMustBeGreaterThanEndTime: string = "The time window's end time must be greater than its start time.";
    static InvalidAttributeValue: string = "The invalid value '{0}' was specified for the '{1}' attribute.";
    static FileAttachmentContentIsNotSet: string = "The content of the file attachment at index {0} must be set.";
    static AutodiscoverDidNotReturnEwsUrl: string = "The Autodiscover service didn't return an appropriate URL that can be used for the ExchangeService Autodiscover URL.";
    static RecurrencePatternMustHaveStartDate: string = "The recurrence pattern's StartDate property must be specified.";
    static OccurrenceIndexMustBeGreaterThanZero: string = "OccurrenceIndex must be greater than 0.";
    static ServiceResponseDoesNotContainXml: string = "The response received from the service didn't contain valid XML.";
    static ItemIsOutOfDate: string = "The operation can't be performed because the item is out of date. Reload the item and try again.";
    static MinuteMustBeBetween0And59: string = "Minute must be between 0 and 59.";
    static NoSoapOrWsSecurityEndpointAvailable: string = "No appropriate Autodiscover SOAP or WS-Security endpoint is available.";
    static ElementNotFound: string = "The element '{0}' in namespace '{1}' wasn't found at the current position.";
    static IndexIsOutOfRange: string = "index is out of range.";
    static PropertyIsReadOnly: string = "This property is read-only and can't be set.";
    static AttachmentCreationFailed: string = "At least one attachment couldn't be created.";
    static DayOfMonthMustBeBetween1And31: string = "DayOfMonth must be between 1 and 31.";
    static ServiceRequestFailed: string = "The request failed. {0}";
    static DelegateUserHasInvalidUserId: string = "The UserId in the DelegateUser is invalid. The StandardUser, PrimarySmtpAddress or SID property must be set.";
    static SearchFilterComparisonValueTypeIsNotSupported: string = "Values of type '{0}' can't be used as comparison values in search filters.";
    static ElementValueCannotBeSerialized: string = "Values of type '{0}' can't be used for the '{1}' element.";
    static PropertyValueMustBeSpecifiedForRecurrencePattern: string = "The recurrence pattern's {0} property must be specified.";
    static NonSummaryPropertyCannotBeUsed: string = "The property {0} can't be used in {1} requests.";
    static HoldIdParameterIsNotSpecified: string = "The hold id parameter is not specified.";
    static TransitionGroupNotFound: string = "Invalid transition. A transition group with the specified ID couldn't be found: {0}";
    static ObjectTypeNotSupported: string = "Objects of type {0} can't be added to the dictionary. The following types are supported: array, byte array, boolean, byte, DateTime, integer, long,, unsigned integer, and unsigned long.";
    static InvalidTimeoutValue: string = "{0} is not a valid timeout value. Valid values range from 1 to 1440.";
    static AutodiscoverRedirectBlocked: string = "Autodiscover blocked a potentially insecure redirection to {0}. To allow Autodiscover to follow the redirection, use the AutodiscoverUrl(string, AutodiscoverRedirectionUrlValidationCallback) overload.";
    static PropertySetCannotBeModified: string = "This PropertySet is read-only and can't be modified.";
    static DayOfTheWeekMustBeSpecifiedForRecurrencePattern: string = "The recurrence pattern's property DayOfTheWeek must be specified.";
    static ServiceObjectAlreadyHasId: string = "This operation can't be performed because this service object already has an ID. To update this service object, use the Update() method instead.";
    static MethodIncompatibleWithRequestVersion: string = "Method {0} is only valid for Exchange Server version {1} or later.";
    static OperationNotSupportedForPropertyDefinitionType: string = "This operation isn't supported for property definition type {0}.";
    static InvalidElementStringValue: string = "The invalid value '{0}' was specified for the '{1}' element.";
    static CollectionIsEmpty: string = "The collection is empty.";
    static InvalidFrequencyValue: string = "{0} is not a valid frequency value. Valid values range from 1 to 1440.";
    static UnexpectedEndOfXmlDocument: string = "The XML document ended unexpectedly.";
    static FolderTypeNotCompatible: string = "The folder type returned by the service ({0}) isn't compatible with the requested folder type ({1}).";
    static RequestIncompatibleWithRequestVersion: string = "The service request {0} is only valid for Exchange version {1} or later.";
    static PropertyTypeIncompatibleWhenUpdatingCollection: string = "Can not update the existing collection item since the item in the response has a different type.";
    static ServerVersionNotSupported: string = "Exchange Server doesn't support the requested version.";
    static DurationMustBeSpecifiedWhenScheduled: string = "Duration must be specified when State is equal to Scheduled.";
    static NoError: string = "No error.";
    static CannotUpdateNewUserConfiguration: string = "This user configuration can't be updated because it's never been saved.";
    static ObjectTypeIncompatibleWithRequestVersion: string = "The object type {0} is only valid for Exchange Server version {1} or later versions.";
    static NullStringArrayElementInvalid: string = "The array contains at least one null element.";
    static HttpsIsRequired: string = "Https is required when partner token is expected.";
    static MergedFreeBusyIntervalMustBeSmallerThanTimeWindow: string = "MergedFreeBusyInterval must be smaller than the specified time window.";
    static SecondMustBeBetween0And59: string = "Second must be between 0 and 59.";
    static AtLeastOneAttachmentCouldNotBeDeleted: string = "At least one attachment couldn't be deleted.";
    static IdAlreadyInList: string = "The ID is already in the list.";
    static BothSearchFilterAndQueryStringCannotBeSpecified: string = "Both search filter and query can't be specified. One of them must be null.";
    static AdditionalPropertyIsNull: string = "The additional property at index {0} is null.";
    static InvalidEmailAddress: string = "The e-mail address is formed incorrectly.";
    static MaximumRedirectionHopsExceeded: string = "The maximum redirection hop count has been reached.";
    static AutodiscoverCouldNotBeLocated: string = "The Autodiscover service couldn't be located.";
    static NoSubscriptionsOnConnection: string = "You must add at least one subscription to this connection before it can be opened.";
    static PermissionLevelInvalidForNonCalendarFolder: string = "The Permission level value {0} can't be used with a non-calendar folder.";
    static InvalidAuthScheme: string = "The token auth scheme should be bearer.";
    static ValuePropertyNotLoaded: string = "This property was requested, but it wasn't returned by the server.";
    static PropertyIncompatibleWithRequestVersion: string = "The property {0} is valid only for Exchange {1} or later versions.";
    static OffsetMustBeGreaterThanZero: string = "The offset must be greater than 0.";
    static CreateItemsDoesNotAllowAttachments: string = "This operation doesn't support items that have attachments.";
    static PropertyDefinitionTypeMismatch: string = "Property definition type '{0}' and type parameter '{1}' aren't compatible.";
    static IntervalMustBeGreaterOrEqualToOne: string = "The interval must be greater than or equal to 1.";
    static CannotSetPermissionLevelToCustom: string = "The PermissionLevel property can't be set to FolderPermissionLevel.Custom. To define a custom permission, set its individual properties to the values you want.";
    static CannotAddRequestHeader: string = "HTTP header '{0}' isn't permitted. Only HTTP headers with the 'X-' prefix are permitted.";
    static ArrayMustHaveAtLeastOneElement: string = "The Array value must have at least one element.";
    static MonthMustBeSpecifiedForRecurrencePattern: string = "The recurrence pattern's Month property must be specified.";
    static ValueOfTypeCannotBeConverted: string = "The value '{0}' of type {1} can't be converted to a value of type {2}.";
    static ValueCannotBeConverted: string = "The value '{0}' couldn't be converted to type {1}.";
    static ServerErrorAndStackTraceDetails: string = "{0} -- Server Error: {1}: {2} {3}";
    static FolderPermissionLevelMustBeSet: string = "The permission level of the folder permission at index {0} must be set.";
    static AutodiscoverError: string = "The Autodiscover service returned an error.";
    static ArrayMustHaveSingleDimension: string = "The array value must have a single dimension.";
    static InvalidPropertyValueNotInRange: string = "{0} must be between {1} and {2}.";
    static RegenerationPatternsOnlyValidForTasks: string = "Regeneration patterns can only be used with Task items.";
    static ItemAttachmentCannotBeUpdated: string = "Item attachments can't be updated.";
    static EqualityComparisonFilterIsInvalid: string = "Either the OtherPropertyDefinition or the Value properties must be set.";
    static AutodiscoverServiceRequestRequiresDomainOrUrl: string = "This Autodiscover request requires that either the Domain or Url be specified.";
    static InvalidUser: string = "Invalid user: '{0}'";
    static AccountIsLocked: string = "This account is locked. Visit {0} to unlock it.";
    static InvalidDomainName: string = "'{0}' is not a valid domain name.";
    static TooFewServiceReponsesReturned: string = "The service was expected to return {1} responses of type '{0}', but {2} responses were received.";
    static CannotSubscribeToStatusEvents: string = "Status events can't be subscribed to.";
    static InvalidSortByPropertyForMailboxSearch: string = "Specified SortBy property '{0}' is invalid.";
    static UnexpectedElementType: string = "The expected XML node type was {0}, but the actual type is {1}.";
    static ValueMustBeGreaterThanZero: string = "The value must be greater than 0.";
    static AttachmentCannotBeUpdated: string = "Attachments can't be updated.";
    static CreateItemsDoesNotHandleExistingItems: string = "This operation can't be performed because at least one item already has an ID.";
    static MultipleContactPhotosInAttachment: string = "This operation only allows at most 1 file attachment with IsContactPhoto set.";
    static InvalidRecurrenceRange: string = "Invalid recurrence range: ({0}).";
    static CannotSetBothImpersonatedAndPrivilegedUser: string = "Can't set both impersonated user and privileged user in the ExchangeService object.";
    static NewMessagesWithAttachmentsCannotBeSentDirectly: string = "New messages with attachments can't be sent directly. You must first save the message and then send it.";
    static CannotCallDisconnectWithNoLiveConnection: string = "The connection is already closed.";
    static IdPropertyMustBeSet: string = "The Id property must be set.";
    static ValuePropertyNotAssigned: string = "You must assign this property before you can read its value.";
    static ZeroLengthArrayInvalid: string = "The array must contain at least one element.";
    static HoldMailboxesParameterIsNotSpecified: string = "The hold mailboxes parameter is not specified.";
    static CannotSaveNotNewUserConfiguration: string = "Calling Save isn't allowed because this user configuration isn't new. To apply local changes to this user configuration, call Update instead.";
    static ServiceObjectDoesNotHaveId: string = "This operation can't be performed because this service object doesn't have an Id.";
    static PropertyCollectionSizeMismatch: string = "The collection returned by the service has a different size from the current one.";
    static XsDurationCouldNotBeParsed: string = "The specified xsDuration argument couldn't be parsed.";
    static UnknownTimeZonePeriodTransitionType: string = "Unknown time zone transition type: {0}";
    static UserPhotoSizeNotSpecified: string = "The UserPhotoSize must be not be null or empty.";
    static JsonSerializationNotImplemented: string = "JSON Serialization is not implemented for this request.Please retry the request with the XML rendering method.";
    static JsonDeserializationNotImplemented: string = "JSON Deserialization is not implemented for this request.Please retry the request with the XML rendering method.";
}


